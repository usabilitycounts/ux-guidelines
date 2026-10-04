#!/usr/bin/env python3
"""Generate the release log: release-log.html's <main> and its translation overlays.

New pages are dated by the commit that first added them (an uncommitted page
counts as today), so adding a page and rerunning this is all it takes. The
improvement notes and the page header live in py/release_notes.py.
"""
import json
import os
import re
import subprocess
import sys
from datetime import date

SITE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from release_notes import HEADER, LABELS, NOTES  # noqa: E402

GIT = next((g for g in ('/Applications/Xcode.app/Contents/Developer/usr/bin/git', '/usr/bin/git') if os.path.exists(g)), 'git')
LANGS = ['fr', 'de', 'es', 'ja', 'zh']
PAGE = 'release-log'
MONTHS = {
    'en': ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    'fr': ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
    'de': ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
    'es': ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
}


def month_label(d, lang):
    if lang in ('ja', 'zh'):
        return f'{d.year}年{d.month}月'
    m = MONTHS[lang][d.month - 1]
    return {'en': f'{m} {d.year}', 'fr': f'{m.capitalize()} {d.year}', 'de': f'{m} {d.year}', 'es': f'{m.capitalize()} de {d.year}'}[lang]


def day_label(d, lang):
    if lang in ('ja', 'zh'):
        return f'{d.month}月{d.day}日'
    m = MONTHS[lang][d.month - 1]
    return {'en': f'{m} {d.day}', 'fr': f'{"1er" if d.day == 1 else d.day} {m}', 'de': f'{d.day}. {m}', 'es': f'{d.day} de {m}'}[lang]


def titles_table():
    s = open(f'{SITE}/i18n.js').read()
    body = re.search(r'const TITLES = \{(.*?)\n  \};', s, re.DOTALL).group(1)
    return {k.replace("\\'", "'"): json.loads('[' + v + ']') for k, v in re.findall(r'^\s*"((?:[^"\\]|\\.)*)": \[(.*?)\],?$', body, re.M)}


def added_on(path):
    out = subprocess.run([GIT, 'log', '--diff-filter=A', '--follow', '--format=%cs', '-1', '--', path],
                         cwd=SITE, capture_output=True, text=True, timeout=30).stdout.strip()
    return date.fromisoformat(out) if out else date.today()


def main():
    index = open(f'{SITE}/index.html').read()
    cards = re.findall(r'<a class="card" href="([a-z0-9-]+)\.html">\s*<h3>([^<]+)</h3>', index)
    tit = titles_table()
    pages = {}
    for slug, title in cards:
        pages.setdefault(added_on(f'{slug}.html'), []).append((slug, title))
    days = sorted(set(pages) | {date.fromisoformat(d) for d in NOTES}, reverse=True)

    curl = lambda s: s.replace("'", '’')
    o = {lang: {'.rl-month h2': [], '.rl-date': [], '.rl-kind': [], '.rl-pages a': [], '.rl-notes li': []} for lang in ['en'] + LANGS}
    out, month = ['<main class="rl-wrap">'], None
    for d in days:
        if (d.year, d.month) != month:
            if month:
                out.append('  </section>')
            month = (d.year, d.month)
            out += ['  <section class="rl-month">', f'    <h2>{month_label(d, "en")}</h2>']
            for lang in o:
                o[lang]['.rl-month h2'].append(month_label(d, lang))
        iso = d.isoformat()
        out += [f'    <article class="rl-day" id="r-{iso}">', f'      <time class="rl-date" datetime="{iso}">{day_label(d, "en")}</time>', '      <div class="rl-body">']
        for lang in o:
            o[lang]['.rl-date'].append(day_label(d, lang))
        new = sorted(pages.get(d, []), key=lambda p: p[1].lower())
        if new:
            out.append(f'        <h3 class="rl-head"><span class="rl-kind">{LABELS["pages"]["en"]}</span><span class="rl-n">{len(new)}</span></h3>')
            out.append('        <ul class="rl-pages">' + ''.join(f'<li><a href="{s}.html">{t}</a></li>' for s, t in new) + '</ul>')
            for lang in o:
                o[lang]['.rl-kind'].append(LABELS['pages'][lang])
                for s, t in new:
                    row = tit.get(t.replace('’', "'"))
                    o[lang]['.rl-pages a'].append(t if lang == 'en' or not row else row[LANGS.index(lang)])
        notes = NOTES.get(iso, [])
        if notes:
            out.append(f'        <h3 class="rl-head"><span class="rl-kind">{LABELS["notes"]["en"]}</span></h3>')
            out.append('        <ul class="rl-notes">' + ''.join(f'<li>{curl(n["en"])}</li>' for n in notes) + '</ul>')
            for lang in o:
                o[lang]['.rl-kind'].append(LABELS['notes'][lang])
                o[lang]['.rl-notes li'] += [curl(n['en']) if lang == 'en' else n[lang] for n in notes]
        out += ['      </div>', '    </article>']
    out += ['  </section>', '</main>']

    path = f'{SITE}/{PAGE}.html'
    s = open(path).read()
    s = re.sub(r'<main class="rl-wrap">.*?</main>', lambda _: '\n'.join(out), s, flags=re.S)
    open(path, 'w').write(s)
    for lang in o:
        h1, tag, sub = HEADER[lang]
        data = {'header h1': [h1], 'header .tagline': [curl(tag) if lang == 'en' else tag],
                'header .subtitle': [curl(sub) if lang == 'en' else sub], **o[lang]}
        with open(f'{SITE}/i18n/{"src" if lang == "en" else lang}/{PAGE}.json', 'w') as fh:
            json.dump(data, fh, ensure_ascii=False, indent=1)
    n = sum(len(v) for v in pages.values())
    print(f'release log: {len(days)} dates, {n} pages, {sum(len(v) for v in NOTES.values())} notes')


if __name__ == '__main__':
    main()
