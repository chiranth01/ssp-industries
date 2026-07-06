import os
from PIL import Image

def process_logo():
    input_path = r"C:\Users\chiranth h\.gemini\antigravity-ide\brain\fabfde8f-18e9-429f-880f-a9eacbdda6a2\media__1782650059817.jpg"
    output_path = r"assets\logo_new_revolving.png"
    
    if not os.path.exists(input_path):
        print(f"Error: input file {input_path} does not exist")
        return
        
    img = Image.open(input_path).convert("RGBA")
    width, height = img.size
    new_img = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    
    for x in range(width):
        for y in range(height):
            r, g, b, a = img.getpixel((x, y))
            
            # Distance from white
            dist_from_white = 255 - min(r, g, b)
            
            # If very close to white, make it transparent
            if r > 250 and g > 250 and b > 250:
                new_img.putpixel((x, y), (0, 0, 0, 0))
            elif r > 240 and g > 240 and b > 240 and abs(r-g) < 8 and abs(g-b) < 8:
                new_img.putpixel((x, y), (0, 0, 0, 0))
            else:
                # Calculate alpha based on distance from white
                # Boost the transition to make it sharp but smooth
                alpha = int(min(255, dist_from_white * 4.0))
                
                if alpha > 0:
                    # Reconstruct foreground color to remove the white halo
                    fr = max(0, min(255, 255 - (255 - r) * 255 // alpha))
                    fg = max(0, min(255, 255 - (255 - g) * 255 // alpha))
                    fb = max(0, min(255, 255 - (255 - b) * 255 // alpha))
                    new_img.putpixel((x, y), (fr, fg, fb, alpha))
                else:
                    new_img.putpixel((x, y), (0, 0, 0, 0))
                    
    bbox = new_img.getbbox()
    if bbox:
        # Crop with 10px padding
        cropped = new_img.crop((max(0, bbox[0]-10), max(0, bbox[1]-10), min(width, bbox[2]+10), min(height, bbox[3]+10)))
        
        # Resize to a reasonable size for header (e.g. 512x512 for high resolution, but 80x80 is enough for revolving logo)
        # Let's keep it 512x512 for high quality or save both
        cropped.save(output_path, "PNG")
        print(f"New logo processed successfully. Bbox: {bbox}")
    else:
        print("Error: No pixels detected in processed logo")

if __name__ == "__main__":
    process_logo()
