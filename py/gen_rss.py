#!/usr/bin/env python3
"""Generate feed.xml: an RSS 2.0 feed with one item per public page.

Items are dated by the commit that added the page (so new pages surface as new
entries), newest first, with the page's title and meta description. Also makes
sure every public page advertises the feed in its <head>.
"""
import glob
import html
import os
import re
import subprocess
import sys
from datetime import datetime, timezone
from email.utils import format_datetime

SITE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BASE = 'https://www.ux-guidelines.com/'
SKIP = {'design-system.html', 'roadmap.html', 'sitemap.html', '404.html'}
GIT = next((g for g in ('/Applications/Xcode.app/Contents/Developer/usr/bin/git', '/usr/bin/git') if os.path.exists(g)), 'git')
LINK_TAG = '<link rel="alternate" type="application/rss+xml" title="UX Guidelines" href="https://www.ux-guidelines.com/feed.xml">'


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


def main():
    items = []
    tagged = 0
    for f in sorted(glob.glob(f'{SITE}/*.html')):
        base = os.path.basename(f)
        if base in SKIP:
            continue
        s = open(f).read()
        if 'rel="alternate" type="application/rss+xml"' not in s and '<link rel="canonical"' in s:
            s = s.replace('<link rel="canonical"', LINK_TAG + '\n<link rel="canonical"', 1)
            open(f, 'w').write(s)
            tagged += 1
        title = re.search(r'<title>([^<]*)</title>', s).group(1).split(' — ')[0]
        m = re.search(r'<meta name="description" content="([^"]*)"', s)
        desc = m.group(1) if m else ''
        url = BASE if base == 'index.html' else BASE + base
        items.append((added_at(f), title, url, desc))
    items.sort(key=lambda x: x[0], reverse=True)
    now = format_datetime(datetime.now(timezone.utc))
    out = ['<?xml version="1.0" encoding="UTF-8"?>',
           '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
           '<channel>',
           '  <title>UX Guidelines</title>',
           f'  <link>{BASE}</link>',
           '  <description>Research-backed laws, heuristics, and patterns of interface design, each explained with its origin, practice guidance, and what changes in the age of AI.</description>',
           '  <language>en</language>',
           f'  <lastBuildDate>{now}</lastBuildDate>',
           f'  <atom:link href="{BASE}feed.xml" rel="self" type="application/rss+xml"/>']
    for when, title, url, desc in items:
        out += ['  <item>',
                f'    <title>{esc(title)}</title>',
                f'    <link>{url}</link>',
                f'    <guid isPermaLink="true">{url}</guid>',
                f'    <pubDate>{format_datetime(when)}</pubDate>',
                f'    <description>{esc(desc)}</description>',
                '  </item>']
    out += ['</channel>', '</rss>', '']
    with open(f'{SITE}/feed.xml', 'w') as fh:
        fh.write('\n'.join(out))
    print(f'feed.xml: {len(items)} items; feed link added to {tagged} pages')


if __name__ == '__main__':
    main()
