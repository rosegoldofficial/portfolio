"""Szablony grafik do mediów społecznościowych w stylu strony (kierunek „Noc”).

Gotowa grafika ze zdjęciem i tekstem:
  python3 tools/social.py news --foto zdj.jpg --etykieta "Z miasta" --tytul "Rada przyjęła *budżet* na 2027" \
      --pod "Za: 15, przeciw: 10." --zrodlo "BIP UM Częstochowa" --format post --out out.jpg

Szablony: news, pilne, cytat, wydarzenie, liczba
Formaty:  post (1080x1350), kwadrat (1080x1080), story (1080x1920), fb (1200x630)
*słowo* w tytule = wyróżnienie na pomarańczowo.

Nakładki do Canvy (PNG z przezroczystością, bez tekstu):
  python3 tools/social.py nakladki --out DIR
"""
import argparse, os, re, datetime
from PIL import Image, ImageDraw, ImageFilter
import graphics as G

FORMATS = {'post': (1080, 1350), 'kwadrat': (1080, 1080), 'story': (1080, 1920), 'fb': (1200, 630)}
SAFE = {'post': (72, 72, 72), 'kwadrat': (64, 64, 64), 'story': (72, 230, 300), 'fb': (56, 48, 48)}  # side, top, bottom

def cover_fit(photo, size, focus_y=0.4):
    W, H = size
    im = Image.open(photo).convert('RGB')
    s = max(W / im.width, H / im.height)
    im = im.resize((round(im.width * s), round(im.height * s)), Image.LANCZOS)
    x = (im.width - W) // 2
    y = int((im.height - H) * focus_y)
    return im.crop((x, y, x + W, y + H)).convert('RGBA')

def gradient(size, start, end, top_alpha, bottom_alpha, color=G.BG):
    W, H = size
    g = Image.new('L', (1, H), 0)
    for y in range(H):
        t = 0 if y < start * H else 1 if y > end * H else (y - start * H) / ((end - start) * H)
        t = t * t * (3 - 2 * t)
        g.putpixel((0, y), int(top_alpha + (bottom_alpha - top_alpha) * t))
    alpha = g.resize((W, H))
    layer = Image.new('RGBA', (W, H), color + (0,))
    layer.putalpha(alpha)
    return layer

def tokens(text):
    """'Rada przyjęła *budżet*, ok' -> [('Rada',0),('przyjęła',0),('budżet,',1)...]; accent per character run."""
    out, acc = [], False
    for word in text.split():
        parts, cur, flags = [], '', []
        for ch in word:
            if ch == '*': acc = not acc; continue
            flags.append(acc); cur += ch
        if cur: out.append((cur, flags))
    return out

def rich_lines(d, text, f, width):
    toks = tokens(text)
    lines, cur = [], []
    for t in toks:
        test = ' '.join(w for w, _ in cur + [t])
        if d.textlength(test, font=f) <= width or not cur: cur.append(t)
        else: lines.append(cur); cur = [t]
    if cur: lines.append(cur)
    return lines

def draw_rich(d, x, y, lines, f, size, lh=1.04):
    for ln in lines:
        cx = x
        for word, flags in ln:
            for ch, on in zip(word, flags):
                d.text((cx, y), ch, font=f, fill=G.ACC if on else G.INK)
                cx += d.textlength(ch, font=f)
            cx += d.textlength(' ', font=f)
        y += int(size * lh)
    return y

def fit_rich(d, text, width, max_lines, start, minimum, weight='Bold'):
    s = start
    while s >= minimum:
        f = G.font(s, weight)
        lines = rich_lines(d, text, f, width)
        if len(lines) <= max_lines: return f, lines, s
        s -= 4
    f = G.font(minimum, weight)
    return f, rich_lines(d, text, f, width)[:max_lines], minimum

def pill(d, x, y, text, size=28, fill=G.ACC, ink=G.ONACC):
    f = G.font(size, 'Bold', True)
    t = text.upper()
    w = d.textlength(t, font=f)
    h = int(size * 1.9)
    d.rounded_rectangle((x, y, x + w + size * 1.4, y + h), radius=h // 2, fill=fill)
    d.text((x + size * 0.7, y + (h - size) // 2 - 3), t, font=f, fill=ink)
    return x + w + size * 1.4

def footer(d, fmt, W, H, date=None, show_logo=True):
    side, top, bottom = SAFE[fmt]
    y = H - bottom + (bottom - 40) // 2 - (0 if fmt != 'story' else 120)
    if fmt == 'story': y = H - bottom - 10
    if show_logo: G.logo(d, (side, y), 34 if fmt != 'fb' else 28)
    mf = G.font(24 if fmt != 'fb' else 20, 'Regular', True)
    right = 'mikolajborawski.pl' + (f'  ·  {date}' if date else '')
    d.text((W - side - d.textlength(right, font=mf), y + 8), right, font=mf, fill=(190, 192, 198))

def base(fmt, foto=None, focus=0.4, dim=0.0):
    W, H = FORMATS[fmt]
    if foto: img = cover_fit(foto, (W, H), focus)
    else:
        img = Image.new('RGBA', (W, H), G.BG + (255,))
        G.glow(img, (W - 100, 200), int(W * 0.4), G.ACC, 110)
    if dim: img.alpha_composite(Image.new('RGBA', (W, H), G.BG + (int(255 * dim),)))
    return img

def news(a, urgent=False):
    W, H = FORMATS[a.format]; side, top, bottom = SAFE[a.format]
    img = base(a.format, a.foto, a.focus)
    img.alpha_composite(gradient((W, H), 0.0, 0.18, 150, 0))           # top, for logo legibility
    img.alpha_composite(gradient((W, H), 0.38 if a.format != 'fb' else 0.15, 0.82, 0, 245))
    d = ImageDraw.Draw(img)
    if urgent:
        d.rectangle((0, 0, W, 10), fill=G.ACC)
    # text block from the bottom up
    width = W - 2 * side
    title_max = {'post': 5, 'kwadrat': 4, 'story': 6, 'fb': 3}[a.format]
    start = {'post': 92, 'kwadrat': 84, 'story': 96, 'fb': 60}[a.format]
    f, lines, s = fit_rich(d, a.tytul, width, title_max, start, 48 if a.format != 'fb' else 36)
    sf = G.font(34 if a.format != 'fb' else 24)
    sub = G.wrap(d, a.pod, sf, width)[:3] if a.pod else []
    src_h = 40 if a.zrodlo else 0
    block = 70 + len(lines) * int(s * 1.04) + (22 + len(sub) * int(sf.size * 1.4) if sub else 0) + src_h
    y = H - bottom - 70 - block
    if a.format == 'fb': y = H - bottom - 56 - block
    label = a.etykieta or ('Pilne' if urgent else 'Z miasta')
    pill(d, side, y, label, 26 if a.format != 'fb' else 20, fill=(224, 48, 30) if urgent else G.ACC, ink=(255, 255, 255) if urgent else G.ONACC)
    y += 70 if a.format != 'fb' else 54
    y = draw_rich(d, side, y, lines, f, s)
    if sub:
        y += 22
        for ln in sub: d.text((side, y), ln, font=sf, fill=(212, 214, 218)); y += int(sf.size * 1.4)
    if a.zrodlo:
        d.text((side, y + 10), f"źródło: {a.zrodlo}", font=G.font(22 if a.format != 'fb' else 18, 'Regular', True), fill=(160, 163, 170))
    # header
    mf = G.font(24 if a.format != 'fb' else 20, 'Medium', True)
    stamp = a.data or datetime.date.today().strftime('%d.%m.%Y')
    if urgent: stamp = f"● {stamp}{' ' + a.godz if a.godz else ''}"
    d.text((W - side - d.textlength(stamp, font=mf), top + 8), stamp, font=mf, fill=(230, 230, 230) if not urgent else (255, 140, 110))
    G.logo(d, (side, top), 34 if a.format != 'fb' else 28)
    mf2 = G.font(22 if a.format != 'fb' else 18, 'Regular', True)
    t = 'mikolajborawski.pl'
    d.text((W - side - d.textlength(t, font=mf2), H - bottom - 6 - (24 if a.format == 'fb' else 30)), t, font=mf2, fill=(150, 153, 160))
    return img

def cytat(a):
    W, H = FORMATS[a.format]; side, top, bottom = SAFE[a.format]
    img = base(a.format, a.foto, a.focus, dim=0.35 if a.foto else 0)
    img.alpha_composite(gradient((W, H), 0.25, 0.9, 40, 250))
    d = ImageDraw.Draw(img)
    G.logo(d, (side, top), 34 if a.format != 'fb' else 28)
    width = W - 2 * side
    q = a.tytul.strip('„”"')
    start = {'post': 72, 'kwadrat': 64, 'story': 78, 'fb': 46}[a.format]
    f, lines, s = fit_rich(d, f"„{q}”", width, {'post': 7, 'kwadrat': 6, 'story': 8, 'fb': 4}[a.format], start, 40, 'SemiBold')
    block = len(lines) * int(s * 1.12) + 110
    y = H - bottom - 60 - block
    d.rounded_rectangle((side, y - 40, side + 90, y - 30), radius=5, fill=G.ACC)
    y = draw_rich(d, side, y, lines, f, s, 1.12)
    y += 34
    d.line((side, y, side + 60, y), fill=G.ACC, width=4)
    d.text((side + 80, y - 20), a.autor or 'Mikołaj Borawski', font=G.font(32 if a.format != 'fb' else 24, 'SemiBold'), fill=G.INK)
    if a.pod: d.text((side + 80, y + 22), a.pod, font=G.font(26 if a.format != 'fb' else 20, 'Regular', True), fill=(170, 173, 180))
    return img

def wydarzenie(a):
    W, H = FORMATS[a.format]; side, top, bottom = SAFE[a.format]
    img = base(a.format, a.foto, a.focus, dim=0.2 if a.foto else 0)
    img.alpha_composite(gradient((W, H), 0.2, 0.75, 60, 250))
    d = ImageDraw.Draw(img)
    G.logo(d, (side, top), 34 if a.format != 'fb' else 28)
    width = W - 2 * side
    rows = [r for r in [('kiedy', a.data + (f', {a.godz}' if a.godz else '') if a.data else None), ('gdzie', a.miejsce)] if r[1]]
    f, lines, s = fit_rich(d, a.tytul, width, 4, {'post': 88, 'kwadrat': 76, 'story': 92, 'fb': 54}[a.format], 44)
    rf = G.font(38 if a.format != 'fb' else 26, 'Medium')
    rh = int(rf.size * 1.9)
    block = 74 + len(lines) * int(s * 1.04) + 30 + len(rows) * rh + (60 if a.pod else 0)
    y = H - bottom - 40 - block
    pill(d, side, y, a.etykieta or 'Wydarzenie', 26 if a.format != 'fb' else 20)
    y += 74 if a.format != 'fb' else 56
    y = draw_rich(d, side, y, lines, f, s) + 30
    lf = G.font(24 if a.format != 'fb' else 18, 'Medium', True)
    for k, v in rows:
        d.rounded_rectangle((side, y, W - side, y + rh - 14), radius=18, fill=(16, 17, 20, 235), outline=(52, 55, 61), width=2)
        d.text((side + 28, y + (rh - 14) // 2 - 13), k, font=lf, fill=G.ACC)
        d.text((side + 160 if a.format != 'fb' else side + 110, y + (rh - 14) // 2 - rf.size // 2 - 4), v, font=rf, fill=G.INK)
        y += rh
    if a.pod: d.text((side, y + 14), a.pod, font=G.font(30 if a.format != 'fb' else 22), fill=(212, 214, 218))
    return img

def liczba(a):
    W, H = FORMATS[a.format]; side, top, bottom = SAFE[a.format]
    img = base(a.format, a.foto, a.focus, dim=0.55 if a.foto else 0)
    if a.foto: img.alpha_composite(gradient((W, H), 0.3, 0.9, 60, 240))
    d = ImageDraw.Draw(img)
    G.logo(d, (side, top), 34 if a.format != 'fb' else 28)
    width = W - 2 * side
    num = a.liczba or '0'
    ns = {'post': 260, 'kwadrat': 230, 'story': 280, 'fb': 150}[a.format]
    nf = G.font(ns, 'Bold')
    while d.textlength(num, font=nf) > width and ns > 80: ns -= 10; nf = G.font(ns, 'Bold')
    f, lines, s = fit_rich(d, a.tytul, width, 4, {'post': 60, 'kwadrat': 54, 'story': 64, 'fb': 36}[a.format], 36, 'SemiBold')
    block = int(ns * 1.0) + 40 + len(lines) * int(s * 1.08) + (70 if a.zrodlo else 0) + 70
    y = (H - block) // 2 + (40 if a.format != 'fb' else 20)
    if a.etykieta: pill(d, side, y - 80 if a.format != 'fb' else y - 56, a.etykieta, 26 if a.format != 'fb' else 20)
    d.text((side - 6, y - int(ns * 0.18)), num, font=nf, fill=G.ACC)
    y += int(ns * 1.0) + 20
    y = draw_rich(d, side, y, lines, f, s, 1.08)
    if a.zrodlo: d.text((side, y + 24), f"źródło: {a.zrodlo}", font=G.font(22 if a.format != 'fb' else 18, 'Regular', True), fill=(160, 163, 170))
    footer(d, a.format, W, H, show_logo=False)
    return img

def nakladki(out):
    """Transparent overlays for Canva: gradient + logo + footer + guides, no text."""
    os.makedirs(out, exist_ok=True)
    for fmt, (W, H) in FORMATS.items():
        side, top, bottom = SAFE[fmt]
        for name, grad in [('news', (0.38 if fmt != 'fb' else 0.15, 0.82, 0, 245)), ('pilne', (0.38 if fmt != 'fb' else 0.15, 0.82, 0, 245)), ('cytat', (0.25, 0.9, 40, 250)), ('wydarzenie', (0.2, 0.75, 60, 250))]:
            img = Image.new('RGBA', (W, H), (0, 0, 0, 0))
            img.alpha_composite(gradient((W, H), 0.0, 0.18, 150, 0))
            img.alpha_composite(gradient((W, H), *grad))
            d = ImageDraw.Draw(img)
            if name == 'pilne': d.rectangle((0, 0, W, 10), fill=G.ACC)
            G.logo(d, (side, top), 34 if fmt != 'fb' else 28)
            mf2 = G.font(22 if fmt != 'fb' else 18, 'Regular', True)
            t = 'mikolajborawski.pl'
            d.text((W - side - d.textlength(t, font=mf2), H - bottom - 6 - (24 if fmt == 'fb' else 30)), t, font=mf2, fill=(150, 153, 160))
            img.save(os.path.join(out, f'nakladka-{name}-{fmt}.png'))

TEMPLATES = {'news': news, 'pilne': lambda a: news(a, True), 'cytat': cytat, 'wydarzenie': wydarzenie, 'liczba': liczba}

if __name__ == '__main__':
    p = argparse.ArgumentParser()
    p.add_argument('szablon', choices=list(TEMPLATES) + ['nakladki'])
    p.add_argument('--foto'); p.add_argument('--focus', type=float, default=0.4)
    p.add_argument('--etykieta'); p.add_argument('--tytul', default=''); p.add_argument('--pod')
    p.add_argument('--zrodlo'); p.add_argument('--data'); p.add_argument('--godz'); p.add_argument('--miejsce')
    p.add_argument('--autor'); p.add_argument('--liczba')
    p.add_argument('--format', choices=list(FORMATS), default='post'); p.add_argument('--out', required=True)
    a = p.parse_args()
    if a.szablon == 'nakladki': nakladki(a.out)
    else: TEMPLATES[a.szablon](a).convert('RGB').save(a.out, quality=92)
