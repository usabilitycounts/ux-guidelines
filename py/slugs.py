"""Localized URL slugs for the language paths.

French, German, and Spanish pages get slugs derived from their translated
titles (/fr/loi-de-fitts.html); Japanese and Chinese keep the English slug
under their prefix. The map is embedded into tokens.js, written into
.htaccess, and used by the sitemap, hreflang, and share-stub generators so
every surface agrees on the same address for a page.
"""
import html
import os
import re
import unicodedata

SITE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LANGS = ['fr', 'de', 'es', 'ja', 'zh']
TRANSLATED = ['fr', 'de', 'es']
IDX = {'fr': 0, 'de': 1, 'es': 2, 'ja': 3, 'zh': 4}


def slugify(title):
    t = title.replace('ß', 'ss').replace('’', '-').replace("'", '-')
    t = unicodedata.normalize('NFKD', t)
    t = ''.join(ch for ch in t if not unicodedata.combining(ch)).lower()
    t = re.sub(r'[^a-z0-9]+', '-', t).strip('-')
    return t


def titles_table():
    s = open(f'{SITE}/i18n.js').read()
    m = re.search(r'const TITLES = \{(.*?)\n  \};', s, re.DOTALL)
    table = {}
    for row in re.finditer(r'"([^"]+)": \[([^\]]+)\]', m.group(1)):
        table[row.group(1).replace('’', "'")] = re.findall(r'"([^"]*)"', row.group(2))
    return table


def en_titles():
    """en slug -> English title, from the hamburger menu (every public page)."""
    menu = open(f'{SITE}/index.html').read()
    out = {}
    for slug, t in re.findall(r'<a href="([a-z0-9-]+)\.html" class="menu-link">([^<]+)</a>', menu):
        out[slug] = html.unescape(t).replace('’', "'")
    return out


def build():
    """{lang: {en_slug: local_slug}} for every public page; index maps to ''."""
    tit = titles_table()
    slugs = {lang: {} for lang in LANGS}
    for en, title in en_titles().items():
        row = tit.get(title)
        for lang in LANGS:
            if lang in TRANSLATED and row and row[IDX[lang]]:
                slugs[lang][en] = slugify(row[IDX[lang]]) or en
            else:
                slugs[lang][en] = en
    for lang in LANGS:
        vals = list(slugs[lang].values())
        dupes = {v for v in vals if vals.count(v) > 1}
        assert not dupes, (lang, dupes)
    return slugs


def local_file(slugs, lang, en_file):
    """'fitts-law.html' -> 'loi-de-fitts.html' for fr; '' stays ''."""
    if not en_file or en_file == 'index.html':
        return '' if not en_file else 'index.html'
    en = en_file[:-5]
    return slugs[lang].get(en, en) + '.html'
