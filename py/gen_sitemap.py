#!/usr/bin/env python3
"""Regenerate sitemap.xml.

One <url> entry per language variant of every public page (49 pages x 6
languages), each carrying the page's full reciprocal hreflang cluster.
Language URLs use the /fr|de|es|ja|zh/ path prefixes served by .htaccess;
English and x-default are the bare URLs. Chinese is declared zh-Hans.
"""
import datetime
import glob
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from slugs import build as build_slugs, local_file

SITE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BASE = 'https://www.ux-guidelines.com/'
CODES = [('en', ''), ('es', 'es/'), ('de', 'de/'), ('fr', 'fr/'),
         ('zh-Hans', 'zh/'), ('ja', 'ja/')]
LANG_OF = {'en': None, 'es': 'es', 'de': 'de', 'fr': 'fr', 'zh-Hans': 'zh', 'ja': 'ja'}
SKIP = {'design-system.html', 'roadmap.html'}


def main():
    pages = sorted(os.path.basename(p) for p in glob.glob(f'{SITE}/*.html')
                   if os.path.basename(p) not in SKIP)
    pages.remove('index.html')
    pages.insert(0, 'index.html')


    out = ['<?xml version="1.0" encoding="UTF-8"?>',
           '<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>',
           '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
           '        xmlns:xhtml="http://www.w3.org/1999/xhtml">']
    SLUGS = build_slugs()
    def where(c, prefix, page):
        return f'{BASE}{prefix}{page if not LANG_OF[c] else local_file(SLUGS, LANG_OF[c], page)}'
    for p in pages:
        page = '' if p == 'index.html' else p
        cluster = [f'    <xhtml:link rel="alternate" hreflang="{c}" '
                   f'href="{where(c, prefix, page)}"/>' for c, prefix in CODES]
        cluster.append(f'    <xhtml:link rel="alternate" hreflang="x-default" '
                       f'href="{BASE}{page}"/>')
        mtime = datetime.date.fromtimestamp(
            os.path.getmtime(os.path.join(SITE, p))).isoformat()
        for c, prefix in CODES:
            out.append('  <url>')
            out.append(f'    <loc>{where(c, prefix, page)}</loc>')
            out.append(f'    <lastmod>{mtime}</lastmod>')
            out.extend(cluster)
            out.append('  </url>')
    out.append('</urlset>')

    with open(f'{SITE}/sitemap.xml', 'w') as f:
        f.write('\n'.join(out) + '\n')
    print(f'sitemap.xml: {len(pages)} pages, {len(pages) * len(CODES)} urls, '
          'per-file lastmod')


if __name__ == '__main__':
    main()
