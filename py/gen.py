import html as _html
import re

SITE = "/Users/patrickneeman/Claude/UX Guidelines"

# Menu with ALL items including the 12 new pages; active link marked per page.
MENU_ITEMS = [
    ('index.html', 'Home', None),
    ('GROUP', 'Reading and Attention', [
        ('eye-scanning-patterns.html', 'Eye Scanning Patterns'),
        ('gutenberg-principle.html', 'Gutenberg Principle')]),
    ('GROUP', 'Visual Design', [
        ('data-visualization.html', 'Data Visualization'),
        ('gestalt-principles.html', 'Gestalt Principles'),
        ('grid-and-hierarchy.html', 'Grid and Hierarchy'),
        ('navigation-patterns.html', 'Navigation Patterns'),
        ('progressive-disclosure.html', 'Progressive Disclosure'),
        ('universal-icons.html', 'Universal Icons')]),
    ('GROUP', 'Heuristics and Principles', [
        ("chestertons-fence.html", "Chesterton's Fence"),
        ('nielsens-heuristics.html', "Nielsen's 10 Heuristics"),
        ('normans-principles.html', "Norman's Principles"),
        ('rams-principles.html', "Rams' 10 Principles"),
        ('shneiderman-eight-golden-rules.html', "Shneiderman's Eight Golden Rules"),
        ('tognazzinis-first-principles.html', "Tognazzini's First Principles"),
        ('wcag-pour.html', 'WCAG and POUR')]),
    ('GROUP', 'Cognitive Laws', [
        ('aesthetic-usability-effect.html', 'Aesthetic-Usability Effect'),
        ('cognitive-load-theory.html', 'Cognitive Load Theory'),
        ('conways-law.html', "Conway's Law"),
        ('curse-of-knowledge.html', 'Curse of Knowledge'),
        ('doherty-threshold.html', 'Doherty Threshold'),
        ('fitts-law.html', "Fitts's Law"),
        ('fogg-behavior-model.html', 'Fogg Behavior Model'),
        ('galls-law.html', "Gall's Law"),
        ('goodharts-law.html', "Goodhart's Law"),
        ('hicks-law.html', "Hick's Law"),
        ('hofstadters-law.html', "Hofstadter's Law"),
        ('hook-model.html', 'Hook Model'),
        ('jakobs-law.html', "Jakob's Law"),
        ('millers-law.html', "Miller's Law"),
        ('paradox-of-choice.html', 'Paradox of Choice'),
        ('pareto-principle.html', 'Pareto Principle'),
        ('peak-end-rule.html', 'Peak-End Rule'),
        ('postels-law.html', "Postel's Law"),
        ('power-law-of-practice.html', 'Power Law of Practice'),
        ('serial-position-effect.html', 'Serial Position Effect'),
        ('steering-law.html', 'Steering Law'),
        ('teslers-law.html', "Tesler's Law"),
        ('von-restorff-effect.html', 'Von Restorff Effect'),
        ('weber-fechner-law.html', 'Weber-Fechner Law'),
        ('yerkes-dodson-law.html', 'Yerkes-Dodson Law'),
        ('zeigarnik-effect.html', 'Zeigarnik Effect')]),
    ('about.html', 'About', None),
    ('glossary.html', 'Glossary', None),
    ('people.html', 'People', None),
    ('sitemap.html', 'Site Map', None),
]


def menu_html(active_file):
    out = ['  <div class="menu-links">']
    for item in MENU_ITEMS:
        if item[0] == 'GROUP':
            _, label, links = item
            out.append('<details class="menu-group">')
            out.append(f'  <summary class="menu-group-label">{label}</summary>')
            for href, name in links:
                cls = 'menu-link active' if href == active_file else 'menu-link'
                out.append(f'  <a href="{href}" class="{cls}">{name}</a>')
            out.append('</details>')
        else:
            href, name, _ = item
            cls = 'menu-link active' if href == active_file else 'menu-link'
            out.append(f'<a href="{href}" class="{cls}">{name}</a>')
    out.append('</div>')
    return '\n'.join(out)


# Shared illustration primitives (namespace .il), matching the site's skeleton language.
IL_CSS = '''
  /* Illustrations */
  .il { position: absolute; top: 30px; left: 0; right: 0; bottom: 0; padding: 18px 22px; display: flex; flex-direction: column; gap: 9px; justify-content: center; }
  .il .ln { display: block; height: 7px; border-radius: 3.5px; background: var(--skel); opacity: 0.4; }
  .il .ln.faint { opacity: 0.22; }
  .il .row { height: 20px; border-radius: 6px; background: var(--surface); display: flex; align-items: center; padding: 0 10px; gap: 8px; flex: none; }
  .il .row i { height: 6px; border-radius: 3px; background: var(--skel-strong); opacity: 0.55; display: block; }
  .il .row.hot { background: rgba(56,189,248,0.15); }
  .il .row.hot i { background: #38bdf8; opacity: 1; }
  .il .row.ghost { background: var(--skel); opacity: 0.12; }
  .il .bars { display: flex; align-items: flex-end; gap: 8px; flex: 1; min-height: 0; }
  .il .bars i { flex: 1; border-radius: 5px 5px 0 0; background: var(--skel); opacity: 0.4; display: block; }
  .il .bars i.b { background: #38bdf8; opacity: 1; }
  .il .meter { height: 12px; border-radius: 6px; background: var(--surface); overflow: hidden; flex: none; }
  .il .meter i { display: block; height: 100%; border-radius: 6px; background: #38bdf8; }
  .il .plot { position: relative; width: 100%; flex: 1; min-height: 0; }
  .il .plot svg { position: absolute; inset: 0; width: 100%; height: 100%; }
  .il .pt { position: absolute; width: 13px; height: 13px; border-radius: 50%; background: #38bdf8; transform: translate(-50%,-50%); }
  .il .pt.g { background: var(--skel-strong); opacity: 0.6; }
  .il .pt.k { background: #111; }
  .il .dot { width: 12px; height: 12px; border-radius: 50%; background: var(--skel); opacity: 0.5; flex: none; }
  .il .dot.b { background: #38bdf8; opacity: 1; }
  .il .grid2 { display: grid; gap: 8px; flex: 1; min-height: 0; }
  .il .tile { border-radius: 7px; background: var(--skel); opacity: 0.25; }
  .il .tile.b { background: #38bdf8; opacity: 1; }
  .il .tile.s { background: var(--surface); opacity: 1; }
  .il .chip { height: 18px; border-radius: 9px; background: var(--surface); padding: 0 12px; display: flex; align-items: center; flex: none; }
  .il .chip i { height: 5px; width: 22px; border-radius: 2.5px; background: var(--skel-strong); opacity: 0.5; display: block; }
  .il .chip.b { background: rgba(56,189,248,0.18); }
  .il .chip.b i { background: #38bdf8; opacity: 1; }
  .il .field { height: 26px; border-radius: 8px; background: #fff; box-shadow: inset 0 0 0 1.5px rgba(0,0,0,0.14); display: flex; align-items: center; padding: 0 10px; gap: 8px; flex: none; }
  .il .field i { height: 6px; border-radius: 3px; background: var(--skel-strong); opacity: 0.5; display: block; }
  .il .chk { width: 12px; height: 12px; border-radius: 50%; background: #38bdf8; margin-left: auto; flex: none; }
  .il .bub { border-radius: 10px; background: var(--surface); padding: 8px 10px; display: flex; flex-direction: column; gap: 5px; }
  .il .bub .l { height: 5px; border-radius: 2.5px; background: var(--skel-strong); opacity: 0.5; display: block; }
  .il .bub.me { background: rgba(56,189,248,0.15); align-self: flex-end; }
  .il .bub.me .l { background: #38bdf8; opacity: 1; }
  .il .think { display: flex; gap: 5px; align-items: center; }
  .il .think b { width: 8px; height: 8px; border-radius: 50%; background: #38bdf8; animation: il-pulse 1.2s ease-in-out infinite; }
  .il .think b:nth-child(2) { animation-delay: 0.2s; }
  .il .think b:nth-child(3) { animation-delay: 0.4s; }
  @keyframes il-pulse { 0%, 100% { opacity: 0.25; } 50% { opacity: 1; } }
  .il .split { display: flex; gap: 16px; flex: 1; min-height: 0; align-items: stretch; }
  .il .col { flex: 1; display: flex; flex-direction: column; gap: 7px; justify-content: center; min-width: 0; }
  .il .stepper { display: flex; align-items: center; padding: 0 8px; flex: none; }
  .il .stepper .nd { width: 14px; height: 14px; border-radius: 50%; background: var(--skel); opacity: 0.5; flex: none; }
  .il .stepper .nd.b { background: #38bdf8; opacity: 1; }
  .il .stepper .lnk { flex: 1; height: 3px; background: var(--skel); opacity: 0.3; }
  .il .stepper .lnk.b { background: #38bdf8; opacity: 1; }'''

EXT_SVG = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>'


def build_page(d):
    esc = lambda s: _html.escape(re.sub(r'<[^>]+>', '', s), quote=True)
    n = len(d['cards'])
    total = n + len(d['ai_cards'])

    cards = []
    for i, (tag, title, desc, demo, meta) in enumerate(d['cards'], 1):
        meta_html = '\n      '.join(
            f'<div><div class="label">{l}</div><div class="value">{v}</div></div>' for l, v in meta)
        cards.append(f'''  <article class="card">
    <div class="card-header">
      <span class="tag">{tag}</span>
      <span class="num">{i:02d} / {total:02d}</span>
      <h3>{title}</h3>
      <p class="desc">{desc}</p>
    </div>
    <div class="demo">{demo}</div>
    <div class="meta">
      {meta_html}
    </div>
  </article>''')

    ai_cards = []
    for k, (title, desc, demo, meta) in enumerate(d['ai_cards'], n + 1):
        meta_html = '\n      '.join(
            f'<div><div class="label">{l}</div><div class="value">{v}</div></div>' for l, v in meta)
        ai_cards.append(f'''  <article class="card">
    <div class="card-header">
      <span class="tag ai-tag">In the Age of AI</span>
      <span class="num">{k:02d} / {total:02d}</span>
      <h3>{title}</h3>
      <p class="desc">{desc}</p>
    </div>
    <div class="demo">{demo}</div>
    <div class="meta">
      {meta_html}
    </div>
  </article>''')

    refs = []
    for group, links in d['refs']:
        lis = '\n        '.join(
            f'<li><a href="{u}" target="_blank" rel="noopener"><span class="title">{t}</span>{EXT_SVG}</a></li>'
            for t, u in links)
        refs.append(f'''    <div class="ref-group">
      <h3 class="label ref-source-label">{group}</h3>
      <ul class="ref-list">
        {lis}
      </ul>
    </div>''')

    eq = f'\n    <p class="body-text law-equation">{d["equation"]}</p>' if d.get('equation') else ''
    law_meta = '\n      '.join(
        f'<div><div class="label">{l}</div><div class="value">{v}</div></div>' for l, v in d['law_meta'])

    url = f'https://www.ux-guidelines.com/{d["file"]}'
    seo_title = f'{d["seo"]} — UX Guidelines'
    desc_meta = esc(d['sub'])[:300]

    return f'''<!DOCTYPE html>
<html lang="en" data-page="{d['key']}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-RYQWVH971M"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){{dataLayer.push(arguments);}}
  gtag('js', new Date());
  gtag('config', 'G-RYQWVH971M');
</script>
<meta name="description" content="{desc_meta}">
<title>{seo_title}</title>
<link rel="canonical" href="{url}">
<meta property="og:title" content="{esc(seo_title)}">
<meta property="og:description" content="{desc_meta}">
<meta property="og:type" content="article">
<meta property="og:url" content="{url}">
<meta property="og:site_name" content="UX Guidelines">
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="{esc(seo_title)}">
<meta name="twitter:description" content="{desc_meta}">
<link rel="stylesheet" href="tokens.css?v=11">
<style>
  /* Page-specific illustration CSS only. Anything shared belongs in tokens.css:
     a copy here overrides the stylesheet and then goes stale the moment the
     stylesheet changes, which is how 39 pages ended up naming an old grey. */
{IL_CSS}
</style>
<script defer src="tokens.js?v=7"></script>
</head>
<body>

<nav class="topnav">
  <div class="brand-row">
    <button class="hamburger" aria-label="Open menu" aria-expanded="false" aria-controls="menu-panel">
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
    </button>
    <a href="index.html" class="brand">UX Guidelines</a>
  </div>
  <a href="about.html" class="about-corner">About</a>
</nav>

<div class="menu-overlay" id="menu-overlay"></div>
<aside class="menu-panel" id="menu-panel" aria-hidden="true">
  <button class="menu-close" aria-label="Close menu">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
  </button>
  <div class="menu-label">Navigate</div>
{menu_html(d['file'])}
</aside>

<header>
  <h1>{d['h1']}</h1>
  <p class="tagline">{d['tagline']}</p>
  <p class="subtitle">{d['sub']}</p>
</header>

<section class="law-feature">
  <div class="law-origin">
    <div class="feature-label">Origin</div>
    <p class="body-text">{d['origin_p1']}</p>
    <p class="body-text">{d['origin_p2']}</p>
  </div>
  <div class="law-content">
    <div class="feature-label">{d['law_label'].split(' · ')[0]}</div>
    <p class="body-text law-desc">{d['law_body']}</p>
    <div class="law-meta">
      {law_meta}
    </div>{eq}
  </div>
</section>

<main class="grid">

{chr(10).join(cards)}

  <div class="ai-divider">
    <span class="spark">✦</span>
    <h3>{d['ai_title']}</h3>
    <p>{d['ai_intro']}</p>
  </div>

{chr(10).join(ai_cards)}

</main>

<section class="references">
  <div class="ref-label">Further Reading</div>
  <div class="ref-groups">
{chr(10).join(refs)}
  </div>
</section>

<footer>
  <div class="copyright">© Patrick Neeman 2026 • UX Guidelines · {d['title']}</div>
</footer>

</body>
</html>
'''


def write_page(d):
    out = build_page(d)
    path = f"{SITE}/{d['file']}"
    with open(path, 'w') as f:
        f.write(out)
    opens = len(re.findall(r'<div\b', out))
    closes = len(re.findall(r'</div>', out))
    assert opens == closes, f"{d['file']}: divs {opens}/{closes}"
    print(f"{d['file']}: written, divs {opens}/{closes}")
