"""Brand images: default share image (public/og.jpg) and Instagram/Facebook profile pictures.

  python3 tools/brand.py OUTDIR    -> public/og.jpg + OUTDIR/profil-*.png
"""
import os, sys
from PIL import Image, ImageDraw, ImageFilter
import graphics as G

ROOT = G.ROOT

def logo(d, x, y, size, ink=G.INK, acc=G.ACC):
    f = G.font(size, 'Bold')
    d.text((x, y), 'borawski', font=f, fill=ink)
    d.text((x + d.textlength('borawski', font=f), y), '_', font=f, fill=acc)
    return d.textlength('borawski_', font=f)

def og(out):
    W, H = 1200, 630
    img = Image.new('RGBA', (W, H), G.BG + (255,))
    G.glow(img, (930, 300), 300, G.ACC, 120)
    G.glow(img, (1080, 120), 160, (255, 140, 60), 60)
    por = Image.open(os.path.join(ROOT, 'tools/portret-2x.png')).convert('RGBA')
    ph = 600; por = por.resize((int(por.width * ph / por.height), ph), Image.LANCZOS)
    mask = Image.new('L', por.size, 255); md = ImageDraw.Draw(mask)
    for i in range(140):
        md.line([(0, ph - 140 + i), (por.width, ph - 140 + i)], fill=int(255 * (1 - i / 140)))
    a = Image.composite(por.getchannel('A'), Image.new('L', por.size, 0), mask); por.putalpha(a)
    img.paste(por, (930 - por.width // 2, H - ph + 30), por)
    d = ImageDraw.Draw(img)
    logo(d, 64, 60, 34)
    tf = G.font(76, 'Bold')
    d.text((64, 200), 'Mikołaj Borawski.', font=tf, fill=G.INK)
    d.text((64, 290), 'Patrzę miastu', font=tf, fill=(110, 114, 122))
    d.text((64, 380), 'na ręce.', font=tf, fill=(110, 114, 122))
    mf = G.font(24, mono=True)
    d.ellipse((66, 540, 78, 552), fill=G.ACC)
    d.text((92, 531), 'mikolajborawski.pl · Częstochowa', font=mf, fill=G.MUTED)
    img.convert('RGB').save(out, quality=90)

def profile(out, variant='dark'):
    S = 1080
    bg = G.BG if variant == 'dark' else G.ACC
    img = Image.new('RGBA', (S, S), bg + (255,))
    if variant == 'dark':
        G.glow(img, (S // 2, S // 2), 420, G.ACC, 70)
    d = ImageDraw.Draw(img)
    size = 150
    f = G.font(size, 'Bold')
    w = d.textlength('borawski_', font=f)
    bb = d.textbbox((0, 0), 'borawski', font=f)
    x = (S - w) / 2; y = (S - (bb[3] - bb[1])) / 2 - bb[1]
    ink = G.INK if variant == 'dark' else G.BG
    acc = G.ACC if variant == 'dark' else (255, 255, 255)
    logo(d, x, y, size, ink, acc)
    img.convert('RGB').save(out)

if __name__ == '__main__':
    og(os.path.join(ROOT, 'public/og.jpg'))
    outdir = sys.argv[1] if len(sys.argv) > 1 else '.'
    os.makedirs(outdir, exist_ok=True)
    profile(os.path.join(outdir, 'profil-ciemne.png'), 'dark')
    profile(os.path.join(outdir, 'profil-pomaranczowe.png'), 'orange')
    print('ok')
