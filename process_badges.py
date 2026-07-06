import os
import math
from PIL import Image

def process_badge(filename, output_name):
    img = Image.open(filename).convert("RGBA")
    width, height = img.size
    
    # Calculate scale factor relative to 1024x558
    scale = width / 1024.0
    
    # Circle center coordinates
    cx, cy = int(512 * scale), int(279 * scale)
    # Crop size (square)
    size = int(480 * scale)
    if size % 2 != 0:
        size += 1
    half_size = size // 2
    
    # Crop image centered at (cx, cy)
    cropped = img.crop((cx - half_size, cy - half_size, cx + half_size, cy + half_size))
    
    # Create mask
    new_img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    ccx, ccy = size // 2, size // 2
    
    # Circle mask radii
    r_inner = int(225 * scale)
    r_outer = int(235 * scale)
    
    for x in range(size):
        for y in range(size):
            r, g, b, a = cropped.getpixel((x, y))
            
            # Calculate distance from cropped center
            dx = x - ccx
            dy = y - ccy
            dist = math.sqrt(dx*dx + dy*dy)
            
            if dist < r_inner:
                # Fully opaque
                alpha = 255
                new_img.putpixel((x, y), (r, g, b, alpha))
            elif dist < r_outer:
                # Soft transition (anti-aliasing)
                factor = (r_outer - dist) / (r_outer - r_inner)
                alpha = int(255 * factor)
                new_img.putpixel((x, y), (r, g, b, alpha))
            else:
                # Fully transparent
                new_img.putpixel((x, y), (0, 0, 0, 0))
                
    if new_img.size != (480, 480):
        new_img = new_img.resize((480, 480), Image.LANCZOS)
    new_img.save(output_name, "PNG")
    print(f"Processed {filename} -> {output_name}")

if __name__ == "__main__":
    assets_dir = "assets"
    for i in range(1, 7):
        src = os.path.join(assets_dir, f"b{i}.jpg")
        dest = os.path.join(assets_dir, f"b{i}_clean.png")
        if os.path.exists(src):
            process_badge(src, dest)
        else:
            print(f"File not found: {src}")
