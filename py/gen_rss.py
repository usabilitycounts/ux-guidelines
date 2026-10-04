#!/usr/bin/env python3
"""Generate the RSS 2.0 feeds: feed.xml in English and feeds/<lang>.xml for each
translation (served at /<lang>/feed.xml by a rewrite in .htaccess).

Items are dated by the commit that added the page (so new pages surface as new
entries), newest first. Translated feeds carry each page's translated title,
its translated subtitle as the description, and its localized URL. Also makes
sure every public page advertises all six feeds in its <head>.
"""
import glob
import html
import json
import os
import re
import subprocess
import sys
from datetime import datetime, timezone
from email.utils import format_datetime

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from slugs import build as build_slugs, en_titles, local_file  # noqa: E402

SITE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BASE = 'https://www.ux-guidelines.com/'
SKIP = {'design-system.html', 'roadmap.html', 'sitemap.html', '404.html'}
GIT = next((g for g in ('/Applications/Xcode.app/Contents/Developer/usr/bin/git', '/usr/bin/git') if os.path.exists(g)), 'git')
LANGS = ['fr', 'de', 'es', 'ja', 'zh']
RSS_LANG = {'en': 'en', 'fr': 'fr', 'de': 'de', 'es': 'es', 'ja': 'ja', 'zh': 'zh-cn'}
NAME = {'en': 'English', 'fr': 'Français', 'de': 'Deutsch', 'es': 'Español', 'ja': '日本語', 'zh': '中文'}
HREFLANG = {'en': 'en', 'fr': 'fr', 'de': 'de', 'es': 'es', 'ja': 'ja', 'zh': 'zh-Hans'}
DESC = {
    'en': 'Research-backed laws, heuristics, and patterns of interface design, each explained with its origin, practice guidance, and what changes in the age of AI.',
    'fr': "Les lois, heuristiques et modèles de conception d'interface fondés sur la recherche, chacun expliqué avec son origine, des conseils pratiques et ce qui change à l'ère de l'IA.",
    'de': 'Forschungsbasierte Gesetze, Heuristiken und Muster des Interface-Designs, jeweils erklärt mit Ursprung, Praxishinweisen und dem, was sich im KI-Zeitalter ändert.',
    'es': 'Leyes, heurísticas y patrones de diseño de interfaces basados en la investigación, cada uno explicado con su origen, consejos prácticos y lo que cambia en la era de la IA.',
    'ja': '研究に基づくインターフェースデザインの法則、ヒューリスティクス、パターン。それぞれの起源、実践のための指針、AI時代に何が変わるかを解説。',
    'zh': '基于研究的界面设计定律、启发式原则和模式，每一项都附有起源、实践指导，以及在 AI 时代发生的变化。',
}
FEED_URL = {lang: BASE + ('feed.xml' if lang == 'en' else f'{lang}/feed.xml') for lang in ['en'] + LANGS}
LINK_BLOCK = '\n'.join(
    f'<link rel="alternate" type="application/rss+xml" title="UX Guidelines{"" if lang == "en" else " (" + NAME[lang] + ")"}"'
    + ('' if lang == 'en' else f' hreflang="{HREFLANG[lang]}"') + f' href="{FEED_URL[lang]}">'
    for lang in ['en'] + LANGS)
LINK_RE = re.compile(r'(?:<link rel="alternate" type="application/rss\+xml"[^>]*>\n?)+')


def added_at(path):
    """When the page was first committed; the file's mtime if git cannot say."""
    try:
        out = subprocess.run([GIT, 'log', '--diff-filter=A', '--follow', '--format=%cI', '-1', '--', path],
                             cwd=SITE, capture_output=True, text=True, timeout=30).stdout.strip()
        if out:
            return datetime.fromisoformat(out)
    except Exception:
        pass
    return datetime.fromtimestamp(os.path.getmtime(path), tz=timezone.utc)


def esc(s):
    return html.escape(html.unescape(s), quote=False)


def strip(s):
    return re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', '', s)).strip()


def titles_table():
    s = open(f'{SITE}/i18n.js').read()
    m = re.search(r'const TITLES = \{(.*?)\n  \};', s, re.DOTALL)
    return {row.group(1).replace('’', "'").replace("\\'", "'"): re.findall(r'"([^"]*)"', row.group(2))
            for row in re.finditer(r'"([^"]+)": \[([^\]]+)\]', m.group(1))}


def feed(lang, items):
    home = BASE if lang == 'en' else f'{BASE}{lang}/'
    title = 'UX Guidelines' if lang == 'en' else f'UX Guidelines ({NAME[lang]})'
    out = ['<?xml version="1.0" encoding="UTF-8"?>',
           '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
           '<channel>',
           f'  <title>{esc(title)}</title>',
           f'  <link>{home}</link>',
           f'  <description>{esc(DESC[lang])}</description>',
           f'  <language>{RSS_LANG[lang]}</language>',
           f'  <lastBuildDate>{format_datetime(datetime.now(timezone.utc))}</lastBuildDate>',
           f'  <atom:link href="{FEED_URL[lang]}" rel="self" type="application/rss+xml"/>']
    for it in items:
        t, url, desc = it[lang]
        out += ['  <item>',
                f'    <title>{esc(t)}</title>',
                f'    <link>{url}</link>',
                f'    <guid isPermaLink="true">{url}</guid>',
                f'    <pubDate>{format_datetime(it["when"])}</pubDate>',
                f'    <description>{esc(desc)}</description>',
                '  </item>']
    out += ['</channel>', '</rss>', '']
    return '\n'.join(out)


def main():
    tit, slugs, menu = titles_table(), build_slugs(), en_titles()
    items, tagged = [], 0
    for f in sorted(glob.glob(f'{SITE}/*.html')):
        base = os.path.basename(f)
        if base in SKIP:
            continue
        s = open(f).read()
        if '<link rel="canonical"' in s and LINK_BLOCK not in s:
            if LINK_RE.search(s):
                s = LINK_RE.sub(LINK_BLOCK + '\n', s, count=1)
            else:
                s = s.replace('<link rel="canonical"', LINK_BLOCK + '\n<link rel="canonical"', 1)
            open(f, 'w').write(s)
            tagged += 1
        slug = base[:-5]
        title = re.search(r'<title>([^<]*)</title>', s).group(1).split(' — ')[0]
        m = re.search(r'<meta name="description" content="([^"]*)"', s)
        desc = m.group(1) if m else ''
        it = {'when': added_at(f), 'en': (title, BASE if slug == 'index' else BASE + base, desc)}
        short = menu.get(slug) or strip(re.search(r'<h1>(.*?)</h1>', s, re.S).group(1))
        row = tit.get(short.replace('’', "'"))
        for i, lang in enumerate(LANGS):
            t = row[i] if row and row[i] else short
            d = desc
            op = f'{SITE}/i18n/{lang}/{slug}.json'
            if os.path.exists(op):
                o = json.load(open(op))
                src = o.get('header .subtitle') or o.get('header .tagline')
                if src:
                    d = strip(src[0])
            url = f'{BASE}{lang}/' + ('' if slug == 'index' else local_file(slugs, lang, base))
            it[lang] = (t, url, d)
        items.append(it)
    items.sort(key=lambda x: x['when'], reverse=True)
    with open(f'{SITE}/feed.xml', 'w') as fh:
        fh.write(feed('en', items))
    os.makedirs(f'{SITE}/feeds', exist_ok=True)
    for lang in LANGS:
        with open(f'{SITE}/feeds/{lang}.xml', 'w') as fh:
            fh.write(feed(lang, items))
    print(f'feeds: {len(items)} items in 6 languages (feed.xml, feeds/*.xml); feed links updated on {tagged} pages')


if __name__ == '__main__':
    main()
