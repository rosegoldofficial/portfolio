"""Facebook cover 1640x624 (safe zone for mobile: x 280-1360)."""
import sys, os
from PIL import Image, ImageDraw
import graphics as G
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

def cover(out, guides=False):
    W, H = 1640, 624
    img = Image.new('RGBA', (W, H), G.BG + (255,))
    G.glow(img, (1225, 300), 330, G.ACC, 150)
    G.glow(img, (1320, 140), 200, (255, 154, 60), 70)
    G.glow(img, (1040, 520), 220, (178, 60, 14), 90)
    por = Image.open(os.path.join(ROOT, 'public/img/portret.webp')).convert('RGBA')
    ph = 600; pw = int(por.width * ph / por.height)
    por = por.resize((pw, ph), Image.LANCZOS)
    # soft fade at the bottom
    mask = por.getchannel('A')
    fade = Image.linear_gradient('L').resize((pw, ph)).point(lambda v: 255 if v < 200 else int(255 * (255 - v) / 55))
    from PIL import ImageChops
    por.putalpha(ImageChops.multiply(mask, fade))
    img.alpha_composite(por, (1225 - pw // 2, H - ph + 24))
    d = ImageDraw.Draw(img)
    x = 400
    d.ellipse((x, 140, x + 12, 152), fill=G.ACC)
    d.text((x + 26, 132), 'Częstochowa · Kiedrzyn · mikolajborawski.pl', font=G.font(24, 'Regular', True), fill=G.MUTED)
    f = G.font(70, 'Bold')
    d.text((x, 186), 'Mikołaj Borawski.', font=f, fill=G.INK)
    d.text((x, 264), 'Patrzę miastu', font=f, fill=(138, 142, 150))
    d.text((x, 342), 'na ręce.', font=f, fill=(138, 142, 150))
    pf = G.font(26, 'SemiBold'); lab = 'Bezpiecznie w sieci  ·  porady dla mieszkańców'
    tw = d.textlength(lab, font=pf)
    d.rounded_rectangle((x, 462, x + tw + 56, 516), radius=27, outline=(52, 55, 61), width=2)
    d.text((x + 28, 474), lab, font=pf, fill=G.INK)
    if guides:
        d.rectangle((280, 0, 1360, H - 1), outline=(0, 200, 255), width=3)
        d.rectangle((40, 470, 380, H), outline=(255, 0, 120), width=3)
        d.text((290, 8), 'widoczne na telefonie', font=G.font(20, 'Regular', True), fill=(0, 200, 255))
        d.text((48, 478), 'zdjęcie profilowe', font=G.font(20, 'Regular', True), fill=(255, 0, 120))
    img.convert('RGB').save(out, quality=94)

if __name__ == '__main__':
    cover(sys.argv[1]); cover(sys.argv[1].replace('.jpg', '-strefy.jpg'), True)
