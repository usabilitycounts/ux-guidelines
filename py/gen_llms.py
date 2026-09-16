#!/usr/bin/env python3
"""Generate llms.txt: a curated index of the site for AI crawlers."""
import glob
import os
import re

SITE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BASE = 'https://www.ux-guidelines.com/'
GROUPS = [
 ("Lay Out The Page", ['eye-scanning-patterns','gutenberg-principle','grid-and-hierarchy','golden-ratio','rule-of-thirds','gestalt-principles','von-restorff-effect','weber-fechner-law']),
 ("Present And Explain", ['data-visualization','universal-icons','progressive-disclosure','cognitive-load-theory','millers-law','serial-position-effect','curse-of-knowledge']),
 ("Structure The Choices", ['hicks-law','jakobs-law','paradox-of-choice','automation-bias']),
 ("Design Actions And Controls", ['fitts-law','steering-law','contour-bias','navigation-patterns','doherty-threshold','power-law-of-practice','yerkes-dodson-law']),
 ("Keep Them Coming Back", ['aesthetic-usability-effect','peak-end-rule','uncanny-valley','zeigarnik-effect','fogg-behavior-model','hook-model','ikea-effect']),
 ("Build The System", ['teslers-law','galls-law','conways-law','postels-law','goodharts-law','hofstadters-law','pareto-principle']),
 ("Follow The Rulebooks", ['nielsens-heuristics','normans-principles','rams-principles','shneiderman-eight-golden-rules','tognazzinis-first-principles','wcag-pour','chestertons-fence']),
]


def main():
    out = ['# UX Guidelines', '',
           '> A library of research-backed UX references — laws, heuristics, and design',
           '> patterns — each explained with its origin, practice guidance, and what',
           '> changes in the age of AI. Available in English, Spanish, German, French,',
           '> Chinese, and Japanese (language-prefixed URLs, e.g. /fr/).', '']
    for group, pages in GROUPS:
        out.append(f'## {group}')
        out.append('')
        for p in pages:
            s = open(f'{SITE}/{p}.html').read()
            title = re.search(r'<title>([^<]*)</title>', s).group(1).split(' — ')[0]
            desc = re.search(r'<meta name="description" content="([^"]*)"', s).group(1)
            out.append(f'- [{title}]({BASE}{p}.html): {desc}')
        out.append('')
    out.append('## Reference')
    out.append('')
    for p, label in [('glossary', 'Glossary of UX terms'), ('people', 'The researchers behind the laws'), ('by-year', 'Chronological timeline of the laws'), ('about', 'About the site')]:
        out.append(f'- [{label}]({BASE}{p}.html)')
    with open(f'{SITE}/llms.txt', 'w') as f:
        f.write('\n'.join(out) + '\n')
    print(f'llms.txt: {sum(len(p) for _, p in GROUPS)} pages indexed')


if __name__ == '__main__':
    main()
