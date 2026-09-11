"""Build search-index.json: one entry per page + per card / glossary term / person."""
import sys, os, json, glob, re
sys.path.insert(0, os.path.dirname(__file__))
from extract import TreeBuilder  # mini-DOM

SITE = "/Users/patrickneeman/Claude/UX Guidelines"
SKIP = {'design-system.html', 'roadmap.html'}

def text_of(node):
    out = []
    def walk(n):
        for c in n.children:
            if isinstance(c, str): out.append(c)
            else: walk(c)
    walk(node)
    t = ''.join(out)
    t = t.replace('&amp;', 'and').replace('&#x27;', "'").replace('&quot;', '"').replace('&#8217;', '’')
    return re.sub(r'\s+', ' ', t).strip()

def inside(node, ancestor):
    p = node.parent
    while p is not None:
        if p is ancestor: return True
        p = p.parent
    return False

entries = []
for f in sorted(glob.glob(f'{SITE}/*.html')):
    base = os.path.basename(f)
    if base in SKIP: continue
    tb = TreeBuilder()
    tb.feed(open(f).read())

    page_title = base
    for n in tb.order:
        if n.tag == 'h1':
            p = n.parent
            while p is not None and p.tag != 'header':
                p = p.parent
            if p is not None:
                page_title = text_of(n)
                break

    sub = next((text_of(n) for n in tb.order if 'subtitle' in n.classes), '')
    law = ' '.join(text_of(n) for n in tb.order if 'body-text' in n.classes)
    entries.append({'u': base, 'p': page_title, 't': page_title, 'b': (sub + ' ' + law).strip()[:600]})

    for card in (n for n in tb.order if 'card' in n.classes and n.tag in ('article', 'a')):
        h3 = next((c for c in tb.order if c.tag == 'h3' and inside(c, card)), None)
        desc = next((c for c in tb.order if 'desc' in c.classes and inside(c, card)), None)
        if h3 is not None and text_of(h3):
            entries.append({'u': base, 'p': page_title, 't': text_of(h3),
                            'b': (text_of(desc) if desc is not None else '')[:220]})

    for term in (n for n in tb.order if 'gl-term' in n.classes or 'pp-term' in n.classes):
        label = next((c for c in tb.order if 'label' in c.classes and inside(c, term)), None)
        body = next((c for c in tb.order if c.tag == 'p' and 'where' not in c.classes and inside(c, term)), None)
        if label is not None and text_of(label):
            entries.append({'u': base, 'p': page_title, 't': text_of(label),
                            'b': (text_of(body) if body is not None else '')[:220]})

with open(f'{SITE}/search-index.json', 'w') as out:
    json.dump(entries, out, ensure_ascii=False, separators=(',', ':'))
print(f'{len(entries)} entries, {os.path.getsize(f"{SITE}/search-index.json")//1024}KB')
