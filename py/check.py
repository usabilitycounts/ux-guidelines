#!/usr/bin/env python3
"""Preflight validator for the UX Guidelines site.

Run before every deploy (ftp_upload.py calls this automatically). Each check
guards an invariant that has silently broken at least once:

  1. balanced <div> tags on every page
  2. translation overlay array counts match the live selector counts
     (a mismatch means that section silently falls back to English)
  3. related chips are bidirectional (A -> B implies B -> A)
  4. every people.html#p-* link resolves to an anchor on the People page
  5. the home subtitle's collection count matches the number of law cards,
     in English and in every translation
  6. the hamburger menu is identical on every page (modulo the active link)

Exit code 0 = clean; 1 = failures printed to stdout.
"""
import glob
import json
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from extract import TreeBuilder, matches  # mini-DOM with the site's selector engine

SITE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LANGS = ['fr', 'de', 'es', 'ja', 'zh']
SKIP = {'design-system.html', '404.html'}

failures = []


def fail(msg):
    failures.append(msg)


def pages():
    return sorted(p for p in glob.glob(f'{SITE}/*.html')
                  if os.path.basename(p) not in SKIP)


def check_div_balance():
    for f in pages():
        s = open(f).read()
        o, c = s.count('<div'), s.count('</div>')
        if o != c:
            fail(f'div balance: {os.path.basename(f)} has {o} <div> vs {c} </div>')


def selector_counts(path):
    tb = TreeBuilder()
    tb.feed(open(path).read())
    counts = {}
    for node in tb.order:
        pass
    return tb


def check_overlay_counts():
    for f in pages():
        base = os.path.basename(f)[:-5]
        tb = TreeBuilder()
        tb.feed(open(f).read())
        for lang in LANGS:
            op = f'{SITE}/i18n/{lang}/{base}.json'
            if not os.path.exists(op):
                continue
            try:
                overlay = json.load(open(op))
            except json.JSONDecodeError as e:
                fail(f'overlay parse: {lang}/{base}.json — {e}')
                continue
            for sel, arr in overlay.items():
                n = sum(1 for node in tb.order if matches(node, sel))
                if n != len(arr):
                    fail(f'overlay count: {lang}/{base}.json "{sel}" has '
                         f'{len(arr)} entries but the page has {n} elements '
                         f'(section will fall back to English)')


def check_related_bidirectional():
    edges = set()
    for f in pages():
        s = open(f).read()
        src = os.path.basename(f)
        for m in re.finditer(r'<div class="related">.*?</div>', s, re.DOTALL):
            for href in re.findall(r'<a href="([^"]+)"', m.group(0)):
                edges.add((src, href))
    for a, b in sorted(edges):
        if (b, a) not in edges:
            fail(f'related one-way: {a} -> {b} has no return chip')


def check_people_anchors():
    people = set(re.findall(r'<div class="pp-term" id="p-([a-z-]+)"',
                            open(f'{SITE}/people.html').read()))
    for f in pages():
        s = open(f).read()
        for slug in set(re.findall(r'people\.html#p-([a-z-]+)', s)):
            if slug not in people:
                fail(f'broken people anchor: {os.path.basename(f)} links to '
                     f'#p-{slug}, not on the People page')


def check_home_count():
    s = open(f'{SITE}/index.html').read()
    main = s[s.find('<div class="home-main">'):]
    n_cards = len(re.findall(r'<a class="card"', main))
    m = re.search(r'<p class="subtitle">[^<]*?(\d+)', s)
    if not m:
        fail('home count: no number found in the home subtitle')
        return
    if int(m.group(1)) != n_cards:
        fail(f'home count: subtitle says {m.group(1)} but the directory '
             f'lists {n_cards} pages')
    stated = m.group(1)
    for lang in LANGS:
        d = json.load(open(f'{SITE}/i18n/{lang}/index.json'))
        sub = d.get('header .subtitle', [''])[0]
        if stated not in sub:
            fail(f'home count: {lang} subtitle does not mention {stated}')
    i18n = open(f'{SITE}/i18n.js').read()
    for m2 in re.finditer(r'"index": \{ sub: \{(.*?)\} \}', i18n, re.DOTALL):
        for lang in LANGS:
            lm = re.search(lang + r': "([^"]*)"', m2.group(1))
            if lm and stated not in lm.group(1):
                fail(f'home count: i18n.js HEAD {lang} subtitle does not '
                     f'mention {stated}')


def check_menu_consistency():
    canon = None
    canon_page = None
    for f in pages():
        s = open(f).read()
        m = re.search(r'<div class="menu-links">(.*?)</div>\s*</aside>', s,
                      re.DOTALL)
        if not m:
            m = re.search(r'<div class="menu-links">(.*?)</div></aside>', s,
                          re.DOTALL)
        if not m:
            fail(f'menu: {os.path.basename(f)} has no menu-links block')
            continue
        norm = m.group(1).replace(' active', '').strip()
        norm = re.sub(r'\s+', ' ', norm)
        if canon is None:
            canon, canon_page = norm, os.path.basename(f)
        elif norm != canon:
            fail(f'menu: {os.path.basename(f)} menu differs from '
                 f'{canon_page}')


def main():
    for check in (check_div_balance, check_overlay_counts,
                  check_related_bidirectional, check_people_anchors,
                  check_home_count, check_menu_consistency):
        check()
    if failures:
        print(f'PREFLIGHT FAILED — {len(failures)} problem(s):')
        for msg in failures:
            print(f'  ✗ {msg}')
        sys.exit(1)
    print('Preflight clean: divs balanced, overlays aligned, related links '
          'bidirectional, anchors resolve, counts agree, menus consistent.')


if __name__ == '__main__':
    main()
