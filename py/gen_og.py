#!/usr/bin/env python3
"""Generate per-page, per-language social share images into og/{lang}/{page}.png.

Title comes from the page h1 (translated via the TITLES table in i18n.js);
the second line is the page tagline (translated via the language overlays).
Latin languages use Helvetica Neue; ja/zh use Hiragino Sans GB.
"""
import glob
import json
import os
import re

from PIL import Image, ImageDraw, ImageFont

SITE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LANGS = ['en', 'fr', 'de', 'es', 'ja', 'zh']
LANG_IDX = {'fr': 0, 'de': 1, 'es': 2, 'ja': 3, 'zh': 4}
W, H = 1200, 630
INK, GREY, ACCENT = (17, 17, 17), (107, 107, 107), (56, 189, 248)


def latin_font(size, weight):
    for idx in range(0, 14):
        try:
            f = ImageFont.truetype('/System/Library/Fonts/HelveticaNeue.ttc', size, index=idx)
            if weight == 'bold' and f.getname()[1] == 'Bold':
                return f
            if weight == 'regular' and f.getname()[1] in ('Regular', 'Plain'):
                return f
        except Exception:
            break
    return ImageFont.load_default()


def cjk_font(size, weight):
    idx = 1 if weight == 'bold' else 0  # W6 / W3
    for i in (idx, 0):
        try:
            return ImageFont.truetype('/System/Library/Fonts/Hiragino Sans GB.ttc', size, index=i)
        except Exception:
            continue
    return ImageFont.load_default()


def font_for(lang, size, weight):
    return cjk_font(size, weight) if lang in ('ja', 'zh') else latin_font(size, weight)


def strip(html):
    return re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', '', html)).strip()


def wrap(d, text, fnt, max_w, cjk):
    if d.textlength(text, font=fnt) <= max_w:
        return [text]
    lines, cur = [], ''
    units = list(text) if cjk else text.split(' ')
    joiner = '' if cjk else ' '
    for u in units:
        trial = (cur + joiner + u) if cur else u
        if d.textlength(trial, font=fnt) <= max_w:
            cur = trial
        else:
            if cur:
                lines.append(cur)
            cur = u
    if cur:
        lines.append(cur)
    return lines


def titles_table():
    s = open(f'{SITE}/i18n.js').read()
    m = re.search(r'const TITLES = \{(.*?)\n  \};', s, re.DOTALL)
    table = {}
    for row in re.finditer(r'"([^"]+)": \[([^\]]+)\]', m.group(1)):
        vals = re.findall(r'"([^"]*)"', row.group(2))
        table[row.group(1).replace('’', "'")] = vals
    return table


def render(path, lang, title, tagline):
    img = Image.new('RGB', (W, H), '#ffffff')
    d = ImageDraw.Draw(img)
    for y in range(0, 240):
        t = y / 240
        d.line([(0, y), (W, y)],
               fill=(int(0xec + 0x13 * t), int(0xee + 0x11 * t), int(0xf1 + 0x0e * t)))
    brand = font_for(lang, 30, 'bold')
    bw = d.textlength('UX Guidelines', font=latin_font(30, 'bold'))
    d.text(((W - bw) / 2, 66), 'UX Guidelines', fill=GREY, font=latin_font(30, 'bold'))

    cjk = lang in ('ja', 'zh')
    size = 88
    while size > 44:
        fnt = font_for(lang, size, 'bold')
        lines = wrap(d, title, fnt, 1040, cjk)
        if len(lines) <= 2:
            break
        size -= 8
    fnt = font_for(lang, size, 'bold')
    lines = wrap(d, title, fnt, 1040, cjk)[:2]
    lh = int(size * 1.15)
    block_h = lh * len(lines)
    y = 240 + (200 - block_h) / 2
    for ln in lines:
        lw = d.textlength(ln, font=fnt)
        d.text(((W - lw) / 2, y), ln, fill=INK, font=fnt)
        y += lh

    if tagline:
        tf = font_for(lang, 36, 'regular')
        tlines = wrap(d, tagline, tf, 1000, cjk)[:2]
        ty = 470
        for ln in tlines:
            lw = d.textlength(ln, font=tf)
            d.text(((W - lw) / 2, ty), ln, fill=GREY, font=tf)
            ty += 48

    d.rounded_rectangle([(W - 88) / 2, H - 52, (W + 88) / 2, H - 40], 6, fill=ACCENT)
    img.save(path, optimize=True)


def main():
    TIT = titles_table()
    pages = sorted(p for p in glob.glob(f'{SITE}/*.html')
                   if os.path.basename(p) != 'design-system.html')
    for lang in LANGS:
        os.makedirs(f'{SITE}/og/{lang}', exist_ok=True)
    count = 0
    for f in pages:
        base = os.path.basename(f)[:-5]
        s = open(f).read()
        h1 = strip(re.search(r'<h1>(.*?)</h1>', s, re.DOTALL).group(1))
        tag_m = re.search(r'<p class="tagline">(.*?)</p>', s, re.DOTALL)
        sub_m = re.search(r'<p class="subtitle">(.*?)</p>', s, re.DOTALL)
        en_tag = strip(tag_m.group(1)) if tag_m else (strip(sub_m.group(1)) if sub_m else '')
        for lang in LANGS:
            title, tagline = h1, en_tag
            if lang != 'en':
                row = TIT.get(h1.replace('’', "'"))
                if row and row[LANG_IDX[lang]]:
                    title = row[LANG_IDX[lang]]
                op = f'{SITE}/i18n/{lang}/{base}.json'
                if os.path.exists(op):
                    d = json.load(open(op))
                    src = d.get('header .tagline') or d.get('header .subtitle')
                    if src:
                        tagline = strip(src[0])
                if title == h1 and lang != 'en' and base == 'index':
                    pass  # home keeps the brand title
            render(f'{SITE}/og/{lang}/{base}.png', lang, title, tagline)
            count += 1
    print(f'generated {count} og images')


if __name__ == '__main__':
    main()
