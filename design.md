# Design

The design system for ux-guidelines.com. Look and feel modeled on extendchrome.com: white background, neutral greys, system Helvetica, generous whitespace, monochrome type.

Source of truth in code: [`tokens.css`](tokens.css) (all tokens and shared components) and [`tokens.js`](tokens.js) (shared runtime). Every page links both; inline `<style>` blocks hold only page-specific rules.

---

## 1. Color

### Surfaces

| Token | Value | Role |
|---|---|---|
| `--bg` | `#ffffff` | page and card background, frame body |
| `--surface` | `#f4f4f4` | topnav, menu panel |
| `--surface-2` / `--demo-bg` | `#ececec` | frame toolbar |
| `--border` | `#e2e2e2` | all borders and dividers |

### Text (4 tokens — the only type colors allowed)

| Token | Value | Role |
|---|---|---|
| `--text-primary` | `#111111` | headings, primary copy, meta values |
| `--text-secondary` | `#6b6b6b` | descriptions, labels, meta labels |
| `--text-faint` | `#9a9a9a` | tertiary / disabled |
| `--text-inverse` | `#ffffff` | text on dark fills |

The site is monochrome: no accent hues in type, tags, dots, or hovers. `h1 em` and tagline `em` render in ink.

### Skeleton (3 tones)

| Token | Value | Role |
|---|---|---|
| `--skel` | `#9a9a9a` | default skeleton (body lines, dots, blocks) |
| `--skel-strong` | `#6b6b6b` | emphasized skeleton (headings, filled buttons) |
| `--skel-emphasis` | `#111111` | primary emphasis (dark CTA) |

### Skeleton alpha tints

| Token | Value | Role |
|---|---|---|
| `--skel-fill-strong` | `rgba(107,107,107,0.22)` | URL pill |
| `--skel-fill-med` | `rgba(107,107,107,0.14)` | medium overlay |
| `--skel-fill-tag` | `rgba(107,107,107,0.12)` | tag pill background |
| `--skel-fill-soft` | `rgba(107,107,107,0.10)` | subtle background |

---

## 2. Typography

Font stack: `"Helvetica Neue", Helvetica, Arial, -apple-system, BlinkMacSystemFont, sans-serif` (`--font-sans`). No web fonts.

**Case**: everything renders in its natural written case — no `text-transform: uppercase` anywhere. Titles are Title Case.
**Tracking**: none, except `h1`, `h2`, and card `h3` at `-1px`.

### Size scale (9 tokens)

| Token | Value | Role |
|---|---|---|
| `--fs-caption` | 11px | tiny captions |
| `--fs-tag` | 12px | tags, nav links, menu label |
| `--fs-ui` | 14px | small UI text |
| `--fs-label` | 15px | labels (meta labels, eyebrows, footer, references) |
| `--fs-body` | 16px | body copy, descriptions, meta values |
| `--fs-h3` | 18px | card titles |
| `--fs-h2` | 21px | section/category headings, taglines |
| `--fs-h1` | `clamp(36px, 5vw, 64px)` | page titles |
| `--fs-feature` | `clamp(22px, 2.6vw, 34px)` | quotes, formulas |

### Line-height scale (4 tokens, currently all 1.5)

`--lh-tight` (h1) · `--lh-heading` (h2/h3/taglines) · `--lh-base` (UI/meta) · `--lh-body` (paragraphs). All four currently resolve to **1.5**; the names are kept so roles can be re-differentiated with one-line edits.

### Semantic type classes (~15, defined once in tokens.css)

| Class | Spec |
|---|---|
| `h1` | `--fs-h1`, 700, -1px |
| `h2` (incl. `.category-label`, `.cat-label`) | `--fs-h2`, 600, -1px |
| `h3` (card titles, incl. `.card-title`) | `--fs-h3`, 600, -1px |
| `.tagline` | `--fs-h2`, 500, ink |
| `.body-text` (aliases: `.desc`, `.subtitle`, `.law-desc`, `.lede`) | `--fs-body`, secondary; `.desc` 52ch, ledes 50% width |
| `.label` (aliases: eyebrows, breadcrumbs, meta labels, ref labels, demo labels) | `--fs-label`, 500, secondary |
| `.value` (meta values) | `--fs-body`, primary |
| `.tag` | `--fs-tag`, 500, `--skel-fill-tag` pill |
| `.feature-text` (quotes, formulas) | `--fs-feature`, primary |
| `.footnote` (copyright, meta-info, legends) | `--fs-label`, 500, secondary |

New markup should use the canonical class names; the aliases exist for legacy markup only.

---

## 3. Browser frame (screen frame)

The single illustration container used across the site. Canonical spec:

- Frame: `background: var(--bg)`, `border: 1.5px solid var(--border)`, `border-radius: 14px`, `overflow: hidden`
- **Aspect ratio: 16 / 10** — frames scale both dimensions on resize, never a fixed height
- Toolbar: 30px tall, `background: var(--surface-2)`, `border-bottom: 1.5px solid var(--border)`, 14px horizontal padding, 8px gap
- Dots: three, 13px diameter, `var(--skel)`
- URL pill: 13px tall, radius 6.5px, `var(--skel-fill-strong)`, 10px left margin
- Body: white, 22px padding (28px horizontal on pseudo-element variant)

<svg viewBox="0 0 760 475" xmlns="http://www.w3.org/2000/svg" width="760" height="475">
  <rect x="1" y="1" width="758" height="473" rx="14" fill="#ffffff" stroke="#e2e2e2" stroke-width="1.5"/>
  <path d="M1 15 A 14 14 0 0 1 15 1 L 745 1 A 14 14 0 0 1 759 15 L 759 56 L 1 56 Z" fill="#ececec"/>
  <line x1="1" y1="56" x2="759" y2="56" stroke="#e2e2e2" stroke-width="1.5"/>
  <circle cx="32" cy="28" r="6.5" fill="#9a9a9a"/>
  <circle cx="56" cy="28" r="6.5" fill="#9a9a9a"/>
  <circle cx="80" cy="28" r="6.5" fill="#9a9a9a"/>
  <rect x="104" y="22" width="635" height="13" rx="6.5" fill="#6b6b6b" fill-opacity="0.22"/>
</svg>

### Class systems

Canonical: `.frame` / `.frame-bar` / `.frame-dot` / `.frame-url` / `.frame-body`.
Legacy aliases (same rendering, kept for existing markup): `.browser`+`.toolbar`+`.dot`+`.url-bar`, `.browser-frame`+`.bf-bar`+`.bf-dot`+`.bf-url`+`.bf-body`, `.browser-mini`+`.bm-bar`+`.bm-dot`+`.bm-url`.

Several pages render the frame chrome on `.demo` itself via `::before` (toolbar + dots as radial-gradients) and `::after` (URL pill) — no extra markup needed.

When a `.demo` wraps a real frame element, the outer chrome is stripped via `:has()` so frames never nest.

### Frame content

**All illustrations have been removed** (2026-08 restart). Every frame renders empty — chrome only. A pre-removal snapshot of every page lives outside the repo for reference.

Rules for the rebuild:
- SVGs stretch to fill: `preserveAspectRatio="none"` (compensate circles with ellipses `rx = r × 1.17`)
- Content inset consistently from all frame edges
- Abstract only: no readable words, no concrete product references — text renders as skeleton pills/bars in title case if ever textual

---

## 4. Skeleton primitives

Fake page content inside frames. Canonical classes (legacy aliases in parentheses):

| Class | Spec |
|---|---|
| `.skel-head` (`.head-block`) | 14px tall, `--skel` |
| `.skel-sub` (`.sub-block`) | 10px tall, `--skel` |
| `.skel-line` (`.line`) | 5px tall, `--skel`; width utilities `.w20`–`.w100` |
| `.skel-nav` | flex row of 6px pills |
| `.skel-img` (`.img-block`) | block, 4px radius |
| `.gap` | 12px spacer |

### Skeleton height scale (for SVG rects)

| Token | Value | Role |
|---|---|---|
| `--skel-h-caption` | 4px | axis labels, tiny meta |
| `--skel-h-body` | 6px | body lines (default) |
| `--skel-h-nav` | 8px | nav items, chips |
| `--skel-h-sub` | 10px | subheads |
| `--skel-h-head` | 14px | headlines |

SVG rect heights must come from this scale (SVG can't consume CSS vars — use the literal px values). Container shapes (>16px) are free.

---

## 5. Layout

- **Left edge: 32px.** Topnav, hero, category headings, card grid, law-feature cards, references, and footer all share it. (20px under 600px.)
- Hero: `padding: 60px 32px 50px`, no bottom border, white background
- Card grid: `repeat(auto-fill, minmax(min(380px,100%),1fr))`, 24px gap, `padding: 40px 32px 60px`
- Card: white, `border: 1px solid var(--border)`, `padding: 36px 32px 32px`, subgrid rows
- **Card order: frame first, then header (tag → h3 → desc), then meta** — frame gets `order: -1` site-wide; card-header stacks vertically (tag pill above the title)
- **Heading hierarchy**: page `h1` → section `h2` → card `h3`
- Law-feature blocks render as bordered white cards inside the 32px gutter (`margin: 40px 32px 0`), not full-bleed bands
- Homepage cards: separated white tiles, hover lift (`box-shadow` + `translateY(-1px)`)

---

## 6. Shared runtime (`tokens.js`)

- Hamburger menu open/close (overlay, panel, Escape)
- **Arrow-key navigation**: ← / → move through pages in menu order, wrapping; suppressed with modifiers or in inputs

---

## 7. Copy rules

- Spell out "and" — no ampersands in user-facing copy
- Natural written case everywhere; Title Case for headings — never ALL CAPS
- `.desc` body: `--fs-body`, `--text-secondary`, `--lh-body`, `max-width: 52ch`
- Ledes (hero subtitle, law-desc): 50% page width
- Meta cells: `.label` at `--fs-label` secondary; `.value` at `--fs-body` primary

---

## 8. File conventions

- One page per principle; `data-page="<slug>"` on `<html>` (feeds the per-page mapping in tokens.css — currently unused since the site is monochrome)
- Deploy: `python3 py/ftp_upload.py` (never upload `py/`, `.git/`, `.claude/`, `.env`)
