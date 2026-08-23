#!/usr/bin/env python3
"""Generate share/{lang}/{page}.html: tiny head-only stubs with translated
social metadata for the language URLs. Served only to social-network
scrapers via a user-agent rule in .htaccess (scrapers do not run the JS
that localizes the real shells). Humans who somehow land here are
meta-refreshed to the real page."""
import glob
import html
import json
import os
import re

SITE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BASE = 'https://www.ux-guidelines.com/'
LANGS = ['fr', 'de', 'es', 'ja', 'zh']
LANG_IDX = {'fr': 0, 'de': 1, 'es': 2, 'ja': 3, 'zh': 4}
HREF = {'fr': 'fr', 'de': 'de', 'es': 'es', 'ja': 'ja', 'zh': 'zh'}


def strip(s):
    return re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', '', s)).strip()


def titles_table():
    s = open(f'{SITE}/i18n.js').read()
    m = re.search(r'const TITLES = \{(.*?)\n  \};', s, re.DOTALL)
    table = {}
    for row in re.finditer(r'"([^"]+)": \[([^\]]+)\]', m.group(1)):
        table[row.group(1).replace('’', "'")] = re.findall(r'"([^"]*)"', row.group(2))
    return table


def main():
    TIT = titles_table()
    pages = sorted(p for p in glob.glob(f'{SITE}/*.html')
                   if os.path.basename(p) != 'design-system.html'
                   and '/share/' not in p)
    n = 0
    for lang in LANGS:
        os.makedirs(f'{SITE}/share/{lang}', exist_ok=True)
        for f in pages:
            base = os.path.basename(f)[:-5]
            s = open(f).read()
            h1 = strip(re.search(r'<h1>(.*?)</h1>', s, re.DOTALL).group(1))
            title = h1
            row = TIT.get(h1.replace('’', "'"))
            if row and row[LANG_IDX[lang]]:
                title = row[LANG_IDX[lang]]
            desc = ''
            op = f'{SITE}/i18n/{lang}/{base}.json'
            if os.path.exists(op):
                d = json.load(open(op))
                src = d.get('header .subtitle') or d.get('header .tagline')
                if src:
                    desc = strip(src[0])
            if not desc:
                m = re.search(r'<meta name="description" content="([^"]*)"', s)
                desc = m.group(1) if m else ''
            page = '' if base == 'index' else base + '.html'
            url = f'{BASE}{HREF[lang]}/{page}'
            img = f'{BASE}og/{lang}/{base}.png'
            t, dsc = html.escape(title), html.escape(desc)
            code = 'zh-Hans' if lang == 'zh' else lang
            stub = f'''<!DOCTYPE html>
<html lang="{code}">
<head>
<meta charset="UTF-8">
<title>{t} — UX Guidelines</title>
<meta name="description" content="{dsc}">
<link rel="canonical" href="{url}">
<meta property="og:title" content="{t} — UX Guidelines">
<meta property="og:description" content="{dsc}">
<meta property="og:type" content="article">
<meta property="og:url" content="{url}">
<meta property="og:site_name" content="UX Guidelines">
<meta property="og:image" content="{img}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{t} — UX Guidelines">
<meta name="twitter:description" content="{dsc}">
<meta name="twitter:image" content="{img}">
<meta http-equiv="refresh" content="0; url={url}">
</head>
<body></body>
</html>
'''
            name = 'index.html' if base == 'index' else base + '.html'
            open(f'{SITE}/share/{lang}/{name}', 'w').write(stub)
            n += 1
    print(f'share stubs: {n}')


if __name__ == '__main__':
    main()
