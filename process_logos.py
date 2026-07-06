from PIL import Image

def extract_logo1():
    img = Image.open("assets/logo1.jpg").convert("RGBA")
    width, height = img.size
    new_img = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    
    # We restrict processing to the central content box to completely avoid any outer edge artifacts
    min_x, max_x = 308, 724
    min_y, max_y = 160, 360
    
    for x in range(width):
        for y in range(height):
            if not (min_x <= x <= max_x and min_y <= y <= max_y):
                continue
                
            r, g, b, a = img.getpixel((x, y))
            
            # Check if it is a grey/white background pixel (including circle border and shadow)
            # Grey/white pixels have very low color saturation (max - min is small)
            # and are relatively bright (min is high)
            max_val = max(r, g, b)
            min_val = min(r, g, b)
            sat = max_val - min_val
            
            if sat < 20 and min_val > 110:
                # This is white background, grey circle border, or grey shadow -> make transparent
                new_img.putpixel((x, y), (0, 0, 0, 0))
            else:
                # Keep it and calculate alpha based on distance from white
                # to get beautiful anti-aliasing
                dist_from_white = 255 - min_val
                alpha = int(min(255, dist_from_white * 4.5)) # boost alpha transition for crispness
                
                # Reconstruct foreground color to avoid white halo effect
                if alpha > 0:
                    fr = clamp(255 - (255 - r) * 255 // alpha)
                    fg = clamp(255 - (255 - g) * 255 // alpha)
                    fb = clamp(255 - (255 - b) * 255 // alpha)
                    new_img.putpixel((x, y), (fr, fg, fb, alpha))
                else:
                    new_img.putpixel((x, y), (0, 0, 0, 0))
                    
    # Crop to the actual active bounding box
    bbox = new_img.getbbox()
    if bbox:
        # Give 5px padding
        cropped = new_img.crop((bbox[0]-5, bbox[1]-5, bbox[2]+5, bbox[3]+5))
        cropped.save("assets/logo1_clean.png", "PNG")
        print(f"Logo 1 processed successfully with bbox: {bbox}")
    else:
        print("Error: Logo 1 has no pixels")

def extract_logo2():
    img = Image.open("assets/logo2.jpg").convert("RGBA")
    width, height = img.size
    new_img = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    
    # We want to extract Curamax logo: green text, gold border, and green subtext
    # White background is pure or near pure white
    # Let's filter out the white background
    for x in range(width):
        for y in range(height):
            r, g, b, a = img.getpixel((x, y))
            
            max_val = max(r, g, b)
            min_val = min(r, g, b)
            sat = max_val - min_val
            
            # White background pixels in logo2.jpg
            if sat < 15 and min_val > 220:
                new_img.putpixel((x, y), (0, 0, 0, 0))
            else:
                # Keep and reconstruct
                dist_from_white = 255 - min_val
                alpha = int(min(255, dist_from_white * 5.0))
                
                if alpha > 0:
                    fr = clamp(255 - (255 - r) * 255 // alpha)
                    fg = clamp(255 - (255 - g) * 255 // alpha)
                    fb = clamp(255 - (255 - b) * 255 // alpha)
                    new_img.putpixel((x, y), (fr, fg, fb, alpha))
                else:
                    new_img.putpixel((x, y), (0, 0, 0, 0))
                    
    bbox = new_img.getbbox()
    if bbox:
        cropped = new_img.crop((bbox[0]-5, bbox[1]-5, bbox[2]+5, bbox[3]+5))
        cropped.save("assets/logo2_clean.png", "PNG")
        print(f"Logo 2 processed successfully with bbox: {bbox}")
    else:
        print("Error: Logo 2 has no pixels")

def clamp(val):
    return max(0, min(255, val))

if __name__ == "__main__":
    extract_logo1()
    extract_logo2()
