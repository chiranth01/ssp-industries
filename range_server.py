import os
import re
import sys
from http.server import SimpleHTTPRequestHandler, HTTPServer
from socketserver import ThreadingMixIn

class ThreadedHTTPServer(ThreadingMixIn, HTTPServer):
    daemon_threads = True

class RangeRequestHandler(SimpleHTTPRequestHandler):
    def send_head(self):
        path = self.translate_path(self.path)
        
        # Resolve clean/extensionless URLs to their .html counterparts
        if not os.path.exists(path) and not os.path.isdir(path) and os.path.exists(path + '.html'):
            path = path + '.html'
            self.path = self.path + '.html'
            
        if os.path.isdir(path):
            return super().send_head()
            
        ctype = self.guess_type(path)
        try:
            f = open(path, 'rb')
        except OSError:
            self.send_error(404, "File not found")
            return None

        range_header = self.headers.get('Range')
        if not range_header:
            return super().send_head()

        match = re.match(r'bytes=(\d+)-(\d*)', range_header)
        if not match:
            self.send_error(400, "Bad Request (Invalid Range)")
            f.close()
            return None

        start_str, end_str = match.groups()
        try:
            start = int(start_str)
        except ValueError:
            start = 0
            
        try:
            size = os.path.getsize(path)
        except OSError:
            self.send_error(404, "File not found")
            f.close()
            return None

        if end_str:
            end = int(end_str)
        else:
            end = size - 1

        if start >= size or end >= size or start > end:
            self.send_error(416, "Requested Range Not Satisfiable")
            self.headers['Content-Range'] = f'bytes */{size}'
            f.close()
            return None

        self.send_response(206)
        self.send_header('Content-Type', ctype)
        self.send_header('Content-Range', f'bytes {start}-{end}/{size}')
        self.send_header('Content-Length', str(end - start + 1))
        self.send_header('Accept-Ranges', 'bytes')
        self.end_headers()
        return f

    def end_headers(self):
        clean_path = self.path.split('?')[0]
        if clean_path.endswith(('.jpg', '.jpeg', '.png', '.gif', '.svg', '.js', '.css', '.webp', '.ico')):
            self.send_header('Cache-Control', 'public, max-age=31536000')
        elif clean_path.endswith(('.html', '.htm')) or not clean_path.split('/')[-1].count('.'):
            self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
            self.send_header('Pragma', 'no-cache')
            self.send_header('Expires', '0')
        super().end_headers()

    def copyfile(self, source, outputfile):
        range_header = self.headers.get('Range')
        if not range_header:
            super().copyfile(source, outputfile)
            return

        match = re.match(r'bytes=(\d+)-(\d*)', range_header)
        if not match:
            super().copyfile(source, outputfile)
            return

        start_str, end_str = match.groups()
        start = int(start_str)
        
        # Seek to end to find size
        source.seek(0, 2)
        size = source.tell()
        
        end = int(end_str) if end_str else size - 1

        source.seek(start)
        left = end - start + 1
        max_chunk = 64 * 1024
        while left > 0:
            chunk = source.read(min(left, max_chunk))
            if not chunk:
                break
            outputfile.write(chunk)
            left -= len(chunk)

if __name__ == '__main__':
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
    server_address = ('', port)
    httpd = ThreadedHTTPServer(server_address, RangeRequestHandler)
    print(f"Multithreaded Server running on port {port} with Range request support...")
    httpd.serve_forever()
