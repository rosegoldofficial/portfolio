"""Generate share images for advice posts.

  python3 tools/graphics.py            -> public/og/porady/<slug>.png (1200x630, link previews)
  python3 tools/graphics.py --fb DIR   -> also DIR/<nn>-<slug>.png (1080x1350, Facebook/Instagram posts)

Run after adding a new post in src/content/porady and commit the PNGs.
"""
import re, sys, glob, os
from PIL import Image, ImageDraw, ImageFont, ImageFilter

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FONT = os.path.join(ROOT, 'tools/fonts/InterTight.ttf')
MONO = os.path.join(ROOT, 'tools/fonts/JetBrainsMono.ttf')
BG, INK, MUTED, FAINT, ACC, ONACC, LINE = (10, 11, 13), (237, 237, 237), (163, 166, 173), (138, 142, 150), (255, 91, 31), (10, 11, 13), (36, 38, 43)

def font(size, weight='Regular', mono=False):
    f = ImageFont.truetype(MONO if mono else FONT, size)
    f.set_variation_by_name(weight)
    return f

def posts():
    out = []
    for p in glob.glob(os.path.join(ROOT, 'src/content/porady/*.md')):
        t = open(p, encoding='utf-8').read()
        fm = t.split('---')[1]
        g = lambda k: re.search(rf'^{k}: "?(.*?)"?$', fm, re.M).group(1)
        body = t.split('---', 2)[2]
        words = len((g('lead') + ' ' + body).split())
        q = re.search(r'^> (.+)$', body, re.M)
        rule = re.sub(r'\*\*|`', '', q.group(1)).strip() if q else ''
        rule = re.sub(r'^(Zasada prosta jak drut|Najprostsza zasada|Zasada):\s*', '', rule)
        rule = rule[:1].upper() + rule[1:]
        out.append(dict(rule=rule, n=int(g('n')), slug=g('slug'), tag=g('tag'), title=g('title'), card=g('card'), minutes=max(2, round(words / 180))))
    return sorted(out, key=lambda x: x['n'])

def wrap(draw, text, f, width):
    lines, cur = [], ''
    for w in text.split():
        t = (cur + ' ' + w).strip()
        if draw.textlength(t, font=f) <= width: cur = t
        else:
            words = cur.split()
            carry = []
            while len(words) > 1 and (len(words[-1]) == 1 or words[-1].isdigit()):
                carry.insert(0, words.pop())
            lines.append(' '.join(words)); cur = ' '.join(carry + [w])
    if cur: lines.append(cur)
    return lines

def glow(img, center, radius, color, alpha):
    layer = Image.new('RGBA', img.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    x, y = center
    d.ellipse((x - radius, y - radius, x + radius, y + radius), fill=color + (alpha,))
    layer = layer.filter(ImageFilter.GaussianBlur(radius * 0.55))
    img.alpha_composite(layer)

def logo(d, xy, size):
    x, y = xy
    f = font(size, 'Bold')
    d.text((x, y), 'borawski', font=f, fill=INK)
    d.text((x + d.textlength('borawski', font=f), y), '_', font=f, fill=ACC)

def fit_title(d, text, width, max_lines, start, minimum):
    s = start
    while s > minimum:
        f = font(s, 'SemiBold')
        lines = wrap(d, text, f, width)
        if len(lines) <= max_lines: return f, lines, s
        s -= 4
    f = font(minimum, 'SemiBold')
    return f, wrap(d, text, f, width), minimum

def fb(p, path):
    W, H, M = 1080, 1350, 84
    img = Image.new('RGBA', (W, H), BG + (255,))
    glow(img, (W - 120, 260), 420, ACC, 120)
    glow(img, (140, H - 160), 300, (178, 60, 14), 60)
    d = ImageDraw.Draw(img)
    logo(d, (M, M), 40)
    mono = font(26, 'Regular', True)
    num = f"porada #{p['n']:02d}"
    d.text((W - M - d.textlength(num, font=mono), M + 10), num, font=mono, fill=FAINT)

    # rule box: keep whole sentences that fit in 4 lines
    rf = font(32)
    rule_lines = []
    if p['rule']:
        sentences = re.split(r'(?<=[.!?])\s+', p['rule'])
        txt = ''
        for snt in sentences:
            cand = (txt + ' ' + snt).strip()
            if len(wrap(d, cand, rf, W - 2 * M - 72)) <= 4: txt = cand
            else: break
        if not txt: txt = sentences[0]
        rule_lines = wrap(d, txt, rf, W - 2 * M - 72)[:4]
    bh = 74 + len(rule_lines) * 46 + 26 if rule_lines else 0
    box_top = H - 290 - bh

    top = 250
    for start in (96, 88, 80, 72, 64):
        f, lines, size = fit_title(d, p['title'], W - 2 * M, 5, start, 56)
        title_end = top + 64 + len(lines) * int(size * 1.04)
        if not rule_lines or title_end + 30 <= box_top: break
    y = top
    d.text((M, y), f"~/porady-cyfrowe · {p['tag']}", font=font(28, 'Medium', True), fill=ACC)
    y += 64
    for ln in lines:
        d.text((M, y), ln, font=f, fill=INK); y += int(size * 1.04)
    y += 28
    fs = font(36)
    for ln in wrap(d, p['card'], fs, W - 2 * M)[:2]:
        if rule_lines and y + 50 > box_top - 20: break
        d.text((M, y), ln, font=fs, fill=MUTED); y += 50
    if rule_lines:
        by = max(box_top, y + 24)
        d.rounded_rectangle((M, by, W - M, by + bh), radius=28, fill=(26, 15, 10), outline=ACC, width=2)
        d.text((M + 36, by + 28), 'zapamiętaj', font=font(24, 'Medium', True), fill=ACC)
        ty = by + 76
        for ln in rule_lines:
            d.text((M + 36, ty), ln, font=rf, fill=INK); ty += 46
    # footer
    d.line((M, H - 250, W - M, H - 250), fill=LINE, width=2)
    d.text((M, H - 212), f"Bezpiecznie w sieci · {p['minutes']} min czytania", font=font(26, 'Regular', True), fill=FAINT)
    pill_f = font(38, 'SemiBold')
    label = 'Więcej na mikolajborawski.pl  →'
    tw = d.textlength(label, font=pill_f)
    x0, y0 = M, H - 160
    d.rounded_rectangle((x0, y0, x0 + tw + 72, y0 + 84), radius=42, fill=ACC)
    d.text((x0 + 36, y0 + 20), label, font=pill_f, fill=ONACC)
    img.convert('RGB').save(path, quality=92)

def og(p, path):
    W, H, M = 1200, 630, 72
    img = Image.new('RGBA', (W, H), BG + (255,))
    glow(img, (W - 60, 80), 320, ACC, 110)
    d = ImageDraw.Draw(img)
    logo(d, (M, M - 8), 32)
    d.text((M, 150), f"porada #{p['n']:02d} · {p['tag']}", font=font(24, 'Medium', True), fill=ACC)
    f, lines, s = fit_title(d, p['title'], W - 2 * M, 3, 72, 44)
    y = 200
    for ln in lines:
        d.text((M, y), ln, font=f, fill=INK); y += int(s * 1.06)
    d.text((M, H - 72), 'mikolajborawski.pl/porady', font=font(24, 'Regular', True), fill=FAINT)
    m = f"{p['minutes']} min czytania"
    mf = font(24, 'Regular', True)
    d.text((W - M - d.textlength(m, font=mf), H - 72), m, font=mf, fill=FAINT)
    img.convert('RGB').save(path, optimize=True)

if __name__ == '__main__':
    ogdir = os.path.join(ROOT, 'public/og/porady'); os.makedirs(ogdir, exist_ok=True)
    fbdir = sys.argv[sys.argv.index('--fb') + 1] if '--fb' in sys.argv else None
    if fbdir: os.makedirs(fbdir, exist_ok=True)
    for p in posts():
        og(p, os.path.join(ogdir, p['slug'] + '.png'))
        if fbdir: fb(p, os.path.join(fbdir, f"{p['n']:02d}-{p['slug']}.jpg"))
    print('ok', len(posts()))
