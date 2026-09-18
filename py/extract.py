"""Extract translatable units from every page into i18n/src/{page}.json.

The unit list per selector must match what the browser's querySelectorAll
returns (same elements, same order) — application is by selector + index,
with a count check as a fail-safe.
"""
import re, os, json, glob
from html.parser import HTMLParser

SITE = "/Users/patrickneeman/Claude/UX Guidelines"

# selector -> matcher: (target classes/tag, required ancestor classes/tags)
# We implement a tiny DOM with descendant matching for the selectors we use.
SELECTORS = [
    "header h1", "header .tagline", "header .subtitle",
    ".law-origin .body-text", ".law-content .law-desc", ".law-equation",
    ".law-meta .label", ".law-meta .value",
    ".apply-list li",
    ".card .tag", ".card h3", ".card .desc",
    ".meta .label", ".meta .value",
    ".meta-cell .label", ".meta-cell .value",
    ".ai-divider h3", ".ai-divider p",
    ".cat-label",
    ".gl-term .label", ".gl-term p",
    ".pp-term .label", ".pp-term p", ".pp-term .where",
    ".about-section h2", ".about-section p",
    ".map-group h2", ".map-list a",
]

VOID = {'meta','link','br','hr','img','input','source','path','circle','line','rect','polygon','polyline','ellipse','use','stop'}

class Node:
    def __init__(self, tag, attrs, parent):
        self.tag = tag
        self.attrs = dict(attrs)
        self.classes = set((self.attrs.get('class') or '').split())
        self.parent = parent
        self.children = []   # nodes and strings
    def inner_html(self):
        out = []
        for c in self.children:
            out.append(c if isinstance(c, str) else c.outer_html())
        return ''.join(out)
    def outer_html(self):
        attrs = ''.join(f' {k}="{v}"' if v is not None else f' {k}' for k, v in self.attrs.items())
        if self.tag in VOID:
            return f'<{self.tag}{attrs}/>'
        return f'<{self.tag}{attrs}>{self.inner_html()}</{self.tag}>'

class TreeBuilder(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=False)
        self.root = Node('#root', [], None)
        self.cur = self.root
        self.order = []
    def handle_starttag(self, tag, attrs):
        n = Node(tag, attrs, self.cur)
        self.cur.children.append(n)
        self.order.append(n)
        if tag not in VOID:
            self.cur = n
    def handle_startendtag(self, tag, attrs):
        n = Node(tag, attrs, self.cur)
        self.cur.children.append(n)
        self.order.append(n)
    def handle_endtag(self, tag):
        c = self.cur
        while c is not self.root and c.tag != tag:
            c = c.parent
        if c is not self.root:
            self.cur = c.parent
    def handle_data(self, d): self.cur.children.append(d)
    def handle_entityref(self, name): self.cur.children.append(f'&{name};')
    def handle_charref(self, name): self.cur.children.append(f'&#{name};')
    def handle_comment(self, d): pass

def part_match(node, part):
    if part.startswith('.'):
        return part[1:] in node.classes
    return node.tag == part

def matches(node, selector):
    parts = selector.split()
    if not part_match(node, parts[-1]):
        return False
    # ancestors for the remaining parts, right to left
    idx = len(parts) - 2
    p = node.parent
    while idx >= 0 and p is not None:
        if part_match(p, parts[idx]):
            idx -= 1
        p = p.parent
    return idx < 0

def extract(path):
    html = open(path).read()
    tb = TreeBuilder()
    tb.feed(html)
    units = {}
    for sel in SELECTORS:
        found = [n.inner_html().strip() for n in tb.order if matches(n, sel)]
        if found:
            units[sel] = found
    return units

def main():
    os.makedirs(f'{SITE}/i18n/src', exist_ok=True)
    skip = {'design-system.html', '404.html'}
    total_units = 0
    for f in sorted(glob.glob(f'{SITE}/*.html')):
        base = os.path.basename(f)
        if base in skip: continue
        units = extract(f)
        if not units: continue
        key = base[:-5]
        n = sum(len(v) for v in units.values())
        total_units += n
        with open(f'{SITE}/i18n/src/{key}.json', 'w') as out:
            json.dump(units, out, ensure_ascii=False, indent=1)
        print(f'{key}: {n} units')
    print('TOTAL units:', total_units)

if __name__ == '__main__':
    main()
