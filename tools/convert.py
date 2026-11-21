"""Convert a .dc.html artboard from the design canvas into an Astro page body + logic module.

Template holes become data-* bindings that src/scripts/bind.js renders.
"""
import re, json, html, sys

COLOR = [
    ('{{accentLight}}', 'var(--accent-text)'),
    ('{{accentBg}}', 'var(--accent-tint)'),
    ('{{accentLine}}', 'var(--accent-line)'),
    ('{{accentDeep}}', 'var(--accent-deep)'),
    ('{{accent}}', 'var(--accent)'),
    ('{{glow45}}', 'var(--glow-45)'), ('{{glow22}}', 'var(--glow-22)'),
    ('{{glow08}}', 'var(--glow-08)'), ('{{glow0}}', 'var(--glow-0)'),
    ('background: #EDEDED; color: #0A0B0D', 'background: var(--ink); color: var(--bg)'),
    ('#0A0B0D', 'var(--bg)'), ('#101114', 'var(--surface)'), ('#1A1C20', 'var(--surface-raised)'),
    ('#24262B', 'var(--line)'), ('#2E2A27', 'var(--line)'), ('#34373D', 'var(--line-strong)'),
    ('#EDEDED', 'var(--ink)'), ('#D4D6DA', 'var(--ink-soft)'), ('#A3A6AD', 'var(--ink-muted)'),
    ('#8A8E96', 'var(--ink-faint)'), ('#6E727A', 'var(--ink-faint)'),
    ('#FF8A8A', 'var(--danger)'), ('#FF6B6B', 'var(--danger)'), ('#3DDC97', 'var(--success)'),
    ('#FF5B1F', 'var(--accent)'), ('#FF8A5C', 'var(--accent-text)'), ('#1A0F0A', 'var(--accent-tint)'),
    ('#3A2418', 'var(--accent-line)'), ('#140E0B', 'var(--accent-deep)'),
]
LINKS = [('F-EN.dc.html', '/en/'), ('F-Noc.dc.html', '/'), ('F-Artykul.dc.html', '/porady/8080/'), ('Main.dc.html', '/')]
EVENTS = {'onClick': 'click', 'onChange': 'change', 'onMouseMove': 'mousemove', 'onMouseLeave': 'mouseleave'}


def body_of(src):
    a = src.index('<x-dc>')
    b = src.index('</x-dc>')
    inner = src[a + 6:b]
    inner = re.sub(r'<helmet>[\s\S]*?</helmet>', '', inner)
    return inner.strip()


def css_of(src):
    m = re.search(r'<style>([\s\S]*?)</style>', src)
    return m.group(1) if m else ''


def logic_of(src):
    m = re.search(r'<script type="text/x-dc" data-dc-script[^>]*>([\s\S]*?)</script>', src)
    return m.group(1).strip() if m else ''


def colors(s):
    # light-on-accent buttons: dark text that must stay dark in both themes
    s = s.replace('background: {{accent}}; color: #0A0B0D', 'background: var(--accent); color: var(--on-accent)')
    s = s.replace('background: #FF5B1F; color: #0A0B0D', 'background: var(--accent); color: var(--on-accent)')
    for a, b in COLOR:
        s = s.replace(a, b)
    return s


def convert(markup):
    s = colors(markup)
    for a, b in LINKS:
        s = s.replace(f'href="{a}"', f'href="{b}"')
    s = s.replace('/_blob/42db4383647804198cf8c7b2e65bc6cb', '/img/portret.webp')
    # sc-for -> template
    s = re.sub(r'<sc-for list="\{\{\s*([\w.]+)\s*\}\}" as="(\w+)"[^>]*>([\s\S]*?)</sc-for>',
               lambda m: f'<template data-for="{m.group(1)}" data-as="{m.group(2)}">{m.group(3)}</template><div data-for-out="{m.group(1)}" style="display: contents"></div>', s)
    # sc-if -> div[data-if]
    def ifrep(m):
        hidden = '' if m.group(2).strip() == 'true' else ' hidden'
        return f'<div data-if="{m.group(1)}"{hidden}>'
    s = re.sub(r'<sc-if value="\{\{\s*([\w.]+)\s*\}\}" hint-placeholder-val="\{\{\s*(\w+)\s*\}\}">', ifrep, s)
    s = s.replace('</sc-if>', '</div>')

    # per-tag processing: events and attribute holes
    def tag(m):
        t = m.group(0)
        if t.startswith('</') or '{{' not in t:
            return t
        on = []
        for attr, ev in EVENTS.items():
            mm = re.search(attr + r'="\{\{\s*([\w.]+)\s*\}\}"', t)
            if mm:
                name = mm.group(1)
                if ev == 'change' and re.search(r'<(input type="(text|email|search)"|textarea)', t):
                    ev = 'input'
                on.append(f'{ev}:{name}')
                t = t.replace(mm.group(0), '')
        # drop controlled value/checked
        t = re.sub(r'\s(value|checked)="\{\{[^}]*\}\}"', '', t)
        tpl = {}
        for am in re.finditer(r'([\w:-]+)="([^"]*\{\{[^"]*)"', t):
            tpl[am.group(1)] = html.unescape(am.group(2))
        for k, v in tpl.items():
            t = t.replace(f'{k}="{html.escape(v, quote=True)}"', f'{k}="{re.sub(r"{{[^}]*}}", "", v)}"')
            t = t.replace(f'{k}="{v}"', f'{k}="{re.sub(r"{{[^}]*}}", "", v)}"')
        extra = ''
        if on:
            extra += f' data-on="{";".join(on)}"'
        if tpl:
            extra += " data-tpl='" + html.escape(json.dumps(tpl, ensure_ascii=False), quote=False).replace("'", '&#39;') + "'"
        t = re.sub(r'(\s*/?>)$', extra + r'\1', t, count=1)
        return t
    s = re.sub(r'<[^<>]+>', tag, s)
    # text holes
    parts = re.split(r'(<[^<>]+>)', s)
    for i, p in enumerate(parts):
        if not p.startswith('<'):
            parts[i] = re.sub(r'\{\{\s*([\w.]+)\s*\}\}', r'<span data-t="\1"></span>', p)
    s = ''.join(parts)
    return s


if __name__ == '__main__':
    src = open(sys.argv[1]).read()
    out = sys.argv[2]
    body = convert(body_of(src))
    open(out + '.html', 'w').write(body)
    open(out + '.css', 'w').write(colors(css_of(src)))
    open(out + '.logic.js', 'w').write(logic_of(src))
    left = re.findall(r'\{\{[^}]*\}\}', re.sub(r"data-tpl='[^']*'", '', body))
    print(sys.argv[1], 'leftover holes:', left[:10])
