// UX Guidelines — shared runtime (hamburger menu, arrow-key page navigation)

// Page scroll container: the document itself does not scroll, so the
// scrollbar starts below the topnav instead of covering it.
(() => {
  const nav = document.querySelector('.topnav');
  if (!nav) return;
  const scroller = document.createElement('div');
  scroller.className = 'page-scroll';
  scroller.tabIndex = -1;
  const keep = new Set([nav]);
  document.querySelectorAll('.menu-overlay, .menu-panel').forEach(el => keep.add(el));
  const kids = [...document.body.children].filter(el => !keep.has(el) && el.tagName !== 'SCRIPT');
  const anchor = document.getElementById('menu-panel') || nav;
  anchor.after(scroller);
  kids.forEach(el => scroller.appendChild(el));
  document.documentElement.classList.add('has-scroller');
  window.uxScroller = scroller;
  scroller.focus({ preventScroll: true });
})();

// Arrow keys navigate prev/next page (menu order)
(() => {
  const PAGES = [
    'index.html', 'eye-scanning-patterns.html', 'gutenberg-principle.html',
    'data-visualization.html', 'gestalt-principles.html', 'grid-and-hierarchy.html',
    'navigation-patterns.html', 'progressive-disclosure.html', 'universal-icons.html',
    'chestertons-fence.html', 'nielsens-heuristics.html', 'normans-principles.html',
    'rams-principles.html', 'shneiderman-eight-golden-rules.html',
    'tognazzinis-first-principles.html', 'wcag-pour.html',
    'aesthetic-usability-effect.html', 'cognitive-load-theory.html', 'contour-bias.html', 'conways-law.html',
    'curse-of-knowledge.html', 'doherty-threshold.html', 'fitts-law.html',
    'fogg-behavior-model.html', 'galls-law.html', 'goodharts-law.html', 'hicks-law.html',
    'hofstadters-law.html', 'hook-model.html', 'ikea-effect.html', 'jakobs-law.html', 'millers-law.html',
    'paradox-of-choice.html', 'pareto-principle.html', 'peak-end-rule.html',
    'postels-law.html', 'power-law-of-practice.html', 'serial-position-effect.html',
    'steering-law.html', 'teslers-law.html', 'uncanny-valley.html', 'von-restorff-effect.html',
    'weber-fechner-law.html', 'yerkes-dodson-law.html', 'zeigarnik-effect.html'
  ];
  const current = location.pathname.split('/').pop() || 'index.html';
  const i = PAGES.indexOf(current);
  if (i === -1) return;
  document.addEventListener('keydown', e => {
    if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
    const t = e.target;
    if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) return;
    if (e.key === 'ArrowRight') location.href = PAGES[(i + 1) % PAGES.length];
    else if (e.key === 'ArrowLeft') location.href = PAGES[(i - 1 + PAGES.length) % PAGES.length];
  });
})();

(() => {
  const hamburger = document.querySelector('.hamburger');
  const overlay = document.getElementById('menu-overlay');
  const panel = document.getElementById('menu-panel');
  const closeBtn = document.querySelector('.menu-close');
  if (!hamburger || !overlay || !panel || !closeBtn) return;
  const open = () => {
    const nav = document.querySelector('.topnav');
    const h = nav ? Math.round(nav.getBoundingClientRect().bottom) : 0;
    panel.style.top = h + 'px';
    overlay.style.top = h + 'px';
    panel.classList.add('open');
    overlay.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    panel.setAttribute('aria-hidden', 'false');
  };
  const close = () => {
    panel.classList.remove('open');
    overlay.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    panel.setAttribute('aria-hidden', 'true');
  };
  // Full-page menu: group loose links under "Site" and expand every category
  const links = panel.querySelector('.menu-links');
  if (links) {
    const loose = Array.from(links.children).filter(el => el.classList.contains('menu-link'));
    if (loose.length) {
      const site = document.createElement('details');
      site.className = 'menu-group';
      site.open = true;
      const sum = document.createElement('summary');
      sum.className = 'menu-group-label';
      sum.textContent = 'Site';
      site.appendChild(sum);
      loose.forEach(el => site.appendChild(el));
      links.appendChild(site);
    }
    const mq = window.matchMedia('(max-width: 600px)');
    const syncGroups = () => links.querySelectorAll('.menu-group').forEach(d => { d.open = !mq.matches; });
    syncGroups();
    mq.addEventListener('change', syncGroups);
  }
  hamburger.addEventListener('click', () => panel.classList.contains('open') ? close() : open());
  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', close);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
})();


// Settings sheet: theme, language, font size — staged, applied on Save
(() => {
  const topnav = document.querySelector('.topnav');
  if (!topnav) return;
  const THEMES = [['light','Light'],['dark','Dark'],['beige','Beige'],['blue','Blue']];
  const LANGS = [['en','English'],['es','Espa\u00f1ol'],['de','Deutsch'],['fr','Fran\u00e7ais'],['zh','\u4e2d\u6587'],['ja','\u65e5\u672c\u8a9e']];
  const cur = () => ({
    theme: localStorage.getItem('ux-theme') || 'light',
    lang: localStorage.getItem('ux-lang') || 'en',
    font: parseInt(localStorage.getItem('ux-font') || '100', 10)
  });
  // apply saved font scale on load
  const applyFont = pct => { document.documentElement.style.fontSize = pct === 100 ? '' : (pct + '%'); };
  applyFont(cur().font);

  const wrap = document.createElement('div');
  wrap.className = 'settings-wrap';
  const btn = document.createElement('button');
  btn.className = 'settings-btn';
  btn.setAttribute('aria-label', 'Settings');
  btn.setAttribute('aria-haspopup', 'dialog');
  btn.setAttribute('aria-expanded', 'false');
  btn.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>';
  wrap.appendChild(btn);
  topnav.appendChild(wrap);

  const sheet = document.createElement('div');
  sheet.className = 'settings-sheet';
  sheet.setAttribute('role', 'dialog');
  sheet.setAttribute('aria-label', 'Settings');
  document.body.appendChild(sheet);

  let staged = cur();

  const render = () => {
    sheet.innerHTML = '';
    const head = document.createElement('div');
    head.className = 'sheet-head';
    const title = document.createElement('div');
    title.className = 'sheet-title';
    title.textContent = 'Settings';
    const x = document.createElement('button');
    x.className = 'sheet-close';
    x.setAttribute('aria-label', 'Close settings');
    x.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true" focusable="false"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>';
    x.addEventListener('click', close);
    head.appendChild(title);
    head.appendChild(x);
    sheet.appendChild(head);

    const body = document.createElement('div');
    body.className = 'sheet-body';
    const section = (label, items, key) => {
      const sec = document.createElement('div');
      sec.className = 'sheet-section';
      const h = document.createElement('div');
      h.className = 'sheet-label';
      h.textContent = label;
      sec.appendChild(h);
      items.forEach(([code, name]) => {
        const b = document.createElement('button');
        b.className = 'sheet-opt' + (staged[key] === code ? ' active' : '');
        b.setAttribute('role', 'radio');
        b.setAttribute('aria-checked', String(staged[key] === code));
        b.textContent = name;
        b.addEventListener('click', () => {
          staged[key] = code;
          render();
        });
        sec.appendChild(b);
      });
      body.appendChild(sec);
    };
    section('Theme', THEMES, 'theme');
    section('Language', LANGS, 'lang');

    const fsec = document.createElement('div');
    fsec.className = 'sheet-section';
    const fh = document.createElement('div');
    fh.className = 'sheet-label';
    fh.textContent = 'Font Size';
    fsec.appendChild(fh);
    const frow = document.createElement('div');
    frow.className = 'sheet-font';
    const fval = document.createElement('span');
    fval.className = 'sheet-font-val';
    fval.textContent = staged.font + '%';
    const range = document.createElement('input');
    range.type = 'range';
    range.min = '85';
    range.max = '130';
    range.step = '5';
    range.value = String(staged.font);
    range.setAttribute('aria-label', 'Font size');
    range.addEventListener('input', () => {
      staged.font = parseInt(range.value, 10);
      fval.textContent = staged.font + '%';
    });
    frow.appendChild(fval);
    frow.appendChild(range);
    fsec.appendChild(frow);
    body.appendChild(fsec);
    sheet.appendChild(body);

    const foot = document.createElement('div');
    foot.className = 'sheet-foot';
    const save = document.createElement('button');
    save.className = 'btn-save';
    save.textContent = 'Save';
    save.addEventListener('click', () => {
      const before = cur();
      localStorage.setItem('ux-theme', staged.theme);
      localStorage.setItem('ux-lang', staged.lang);
      localStorage.setItem('ux-font', String(staged.font));
      const root = document.documentElement;
      root.classList.remove('light', 'dark', 'beige', 'blue');
      if (staged.theme !== 'light') root.classList.add(staged.theme);
      applyFont(staged.font);
      close();
      if (staged.lang !== before.lang) location.reload();
    });
    const cancel = document.createElement('button');
    cancel.className = 'btn-cancel';
    cancel.textContent = 'Cancel';
    cancel.addEventListener('click', close);
    foot.appendChild(save);
    foot.appendChild(cancel);
    sheet.appendChild(foot);
  };

  function open() {
    staged = cur();
    render();
    sheet.classList.add('open');
    const f = sheet.querySelector('.sheet-opt');
    if (f) f.focus();
    btn.setAttribute('aria-expanded', 'true');
  }
  function close() {
    const had = sheet.contains(document.activeElement);
    sheet.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    if (had) btn.focus();
  }
  btn.addEventListener('click', e => {
    e.stopPropagation();
    sheet.classList.contains('open') ? close() : open();
  });
})();

// Lazy-load translations when a non-English language is active.
// A ?lang= URL parameter (used by sitemap hreflang alternates) selects and persists a language.
(() => {
  try {
    const m = location.search.match(/[?&]lang=([a-z]{2})\b/);
    if (m && ['en', 'es', 'de', 'fr', 'zh', 'ja'].includes(m[1])) localStorage.setItem('ux-lang', m[1]);
  } catch (e) {}
  const lang = localStorage.getItem('ux-lang');
  if (!lang || lang === 'en') return;
  const s = document.createElement('script');
  s.src = 'i18n.js?v=22';
  document.head.appendChild(s);
})();

// Letter navigation sticks just below the topnav; bordered while stuck
(() => {
  const an = document.querySelector('.alpha-nav');
  const nav = document.querySelector('.topnav');
  if (!an || !nav) return;
  an.style.top = (window.uxScroller ? 0 : nav.offsetHeight) + 'px';
  let ticking = false;
  const check = () => {
    ticking = false;
    const stuck = an.getBoundingClientRect().top <= nav.getBoundingClientRect().bottom + 1;
    an.classList.toggle('stuck', stuck);
  };
  (window.uxScroller || window).addEventListener('scroll', () => {
    if (!ticking) { ticking = true; requestAnimationFrame(check); }
  }, { passive: true });
  check();
})();

// Fat footer: brand, site links, sister sites, social
(() => {
  const footer = document.querySelector('footer');
  if (!footer || footer.querySelector('.footer-top')) return;
  const SOCIAL = [
    ['LinkedIn', 'https://www.linkedin.com/in/patrick-neeman-ux/', '<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>'],
    ['Medium', 'https://medium.com/@usabilitycounts', '<path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75S24 8.83 24 12z"/>'],
    ['Substack', 'https://substack.com/@patrickneeman', '<path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>'],
    ['X', 'https://x.com/usabilitycounts', '<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644z"/>'],
    ['Bluesky', 'https://bsky.app/profile/usabilitycounts.bsky.social', '<path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8z"/>'],
    ['Slack', 'https://www.aiforux.org', '<path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zm10.122 2.521a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.268 0a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zm-2.523 10.122a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zm0-1.268a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>']
  ];
  const SITE_LINKS = [['About', 'about.html'], ['Glossary', 'glossary.html'], ['People', 'people.html'], ['Site Map', 'sitemap.html']];
  const SISTER = [['AI for UX', 'https://www.aiforux.org'], ['Extend Chrome', 'https://www.extendchrome.com'], ['GPT Prompt Guides', 'https://www.gptpromptguides.com'], ['UX Components', 'https://www.ux-components.com']];

  const top = document.createElement('div');
  top.className = 'footer-top';

  const brand = document.createElement('div');
  brand.className = 'footer-col footer-brand';
  const bname = document.createElement('div');
  bname.className = 'footer-logo';
  bname.textContent = 'UX Guidelines';
  const bline = document.createElement('p');
  bline.className = 'footer-line';
  bline.textContent = 'Research-backed laws, heuristics, and patterns of interface design.';
  const social = document.createElement('div');
  social.className = 'footer-social';
  SOCIAL.forEach(([name, url, path]) => {
    const a = document.createElement('a');
    a.href = url; a.target = '_blank'; a.rel = 'noopener';
    a.setAttribute('aria-label', name); a.title = name;
    a.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">' + path + '</svg>';
    social.appendChild(a);
  });
  brand.appendChild(bname);
  brand.appendChild(bline);
  brand.appendChild(social);

  const mkcol = (head, links, external) => {
    const col = document.createElement('div');
    col.className = 'footer-col';
    const h = document.createElement('div');
    h.className = 'footer-head';
    h.textContent = head;
    col.appendChild(h);
    links.forEach(([name, url]) => {
      const a = document.createElement('a');
      a.href = url;
      a.textContent = name;
      if (external) { a.target = '_blank'; a.rel = 'noopener'; }
      col.appendChild(a);
    });
    return col;
  };

  top.appendChild(brand);
  top.appendChild(mkcol('Site', SITE_LINKS, false));
  top.appendChild(mkcol('Sister Sites', SISTER, true));

  const bottom = document.createElement('div');
  bottom.className = 'footer-bottom';
  const copyright = footer.querySelector('.copyright');
  const meta = footer.querySelector('.meta-info');
  footer.insertBefore(top, footer.firstChild);
  if (copyright) bottom.appendChild(copyright);
  if (meta) bottom.appendChild(meta);
  footer.appendChild(bottom);
})();

// Topnav search: client-side over search-index.json
(() => {
  const topnav = document.querySelector('.topnav');
  const anchor = document.querySelector('.topnav .settings-wrap');
  if (!topnav || !anchor) return;
  const wrap = document.createElement('div');
  wrap.className = 'search-wrap';
  const input = document.createElement('input');
  input.className = 'search-input';
  input.type = 'search';
  input.placeholder = 'Search';
  input.setAttribute('aria-label', 'Search the site');
  const results = document.createElement('div');
  results.className = 'search-results';
  results.id = 'search-results';
  results.setAttribute('role', 'region');
  results.setAttribute('aria-label', 'Search results');
  input.setAttribute('role', 'combobox');
  input.setAttribute('aria-expanded', 'false');
  input.setAttribute('aria-controls', 'search-results');
  const live = document.createElement('div');
  live.className = 'visually-hidden';
  live.setAttribute('aria-live', 'polite');
  document.body.appendChild(live);
  const ico = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  ico.setAttribute('viewBox', '0 0 24 24');
  ico.setAttribute('class', 'search-ico');
  ico.innerHTML = '<circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" stroke-width="2"/><line x1="16.5" y1="16.5" x2="21" y2="21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>';
  const clearBtn = document.createElement('button');
  clearBtn.className = 'search-clear';
  clearBtn.setAttribute('aria-label', 'Clear search');
  clearBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>';
  wrap.appendChild(ico);
  wrap.appendChild(input);
  wrap.appendChild(clearBtn);
  wrap.appendChild(results);
  topnav.insertBefore(wrap, anchor);
  const syncClear = () => clearBtn.classList.toggle('show', input.value.length > 0);
  const mqMobile = window.matchMedia('(max-width: 600px)');
  const closeTakeover = () => {
    topnav.classList.remove('search-open');
    results.classList.remove('open');
  };
  ico.addEventListener('click', () => {
    if (mqMobile.matches && !topnav.classList.contains('search-open')) {
      topnav.classList.add('search-open');
      setTimeout(() => input.focus(), 60);
    }
  });
  clearBtn.addEventListener('click', () => {
    const had = input.value.length > 0;
    input.value = '';
    syncClear();
    results.classList.remove('open');
    if (!had && mqMobile.matches) closeTakeover();
    else input.focus();
  });

  let index = null, loading = false, timer = null;
  const load = () => {
    if (index || loading) return;
    loading = true;
    fetch('search-index.json?v=1').then(r => r.json()).then(d => { index = d; const q = input.value.trim(); if (q) search(q); }).catch(() => { loading = false; });
  };
  const close = () => { results.classList.remove('open'); input.setAttribute('aria-expanded', 'false'); };
  const search = q => {
    if (!index || q.length < 2) { close(); return; }
    const ql = q.toLowerCase();
    const scored = [];
    for (const e of index) {
      const t = e.t.toLowerCase(), b = e.b.toLowerCase(), p = e.p.toLowerCase();
      let s = 0;
      if (t === ql) s = 100;
      else if (t.startsWith(ql)) s = 60;
      else if (t.includes(ql)) s = 40;
      else if (p.includes(ql)) s = 20;
      else if (b.includes(ql)) s = 10;
      if (s) scored.push([s + (e.t === e.p ? 2 : 0), e]);
    }
    scored.sort((a, b) => b[0] - a[0]);
    const top = scored.slice(0, 8);
    if (!top.length) { close(); return; }
    results.style.top = Math.round(topnav.getBoundingClientRect().bottom) + 'px';
    results.innerHTML = '';
    top.forEach(([_, e]) => {
      const a = document.createElement('a');
      a.href = e.u;
      a.className = 'search-hit';
      const t = document.createElement('div');
      t.className = 'search-hit-title';
      t.textContent = e.t;
      const c = document.createElement('div');
      c.className = 'search-hit-page';
      c.textContent = e.t === e.p ? (e.b.slice(0, 90) || e.p) : e.p;
      a.appendChild(t);
      a.appendChild(c);
      results.appendChild(a);
    });
    results.classList.add('open');
    input.setAttribute('aria-expanded', 'true');
    live.textContent = top.length + ' results';
  };
  const showRecents = () => {
    const T = k => (window.uxT && window.uxT(k)) || k;
    let recent = [];
    try { recent = JSON.parse(localStorage.getItem('ux-recent') || '[]'); } catch (e) {}
    let marks = [];
    try { marks = (window.uxBookmarks ? window.uxBookmarks() : []); } catch (e) {}
    const page = (location.pathname.split('/').pop() || 'index.html');
    recent = recent.filter(r => r.u !== page).slice(0, 6);
    marks = marks.slice(0, 6);
    if (!recent.length && !marks.length) { close(); return; }
    results.style.top = Math.round(topnav.getBoundingClientRect().bottom) + 'px';
    results.innerHTML = '';
    const group = (label, items) => {
      if (!items.length) return;
      const lab = document.createElement('div');
      lab.className = 'search-recent-label';
      lab.textContent = T(label);
      results.appendChild(lab);
      items.forEach(rt => {
        const a = document.createElement('a');
        a.href = rt.u;
        a.className = 'search-hit';
        const t = document.createElement('div');
        t.className = 'search-hit-title';
        t.textContent = rt.t;
        a.appendChild(t);
        results.appendChild(a);
      });
    };
    group('Bookmarked', marks);
    group('Recently viewed', recent);
    results.classList.add('open');
    input.setAttribute('aria-expanded', 'true');
  };
  input.addEventListener('focus', () => {
    load();
    if (!input.value.trim()) showRecents();
  });
  input.addEventListener('input', () => {
    syncClear();
    load();
    clearTimeout(timer);
    const q = input.value.trim();
    if (!q) { showRecents(); return; }
    timer = setTimeout(() => search(q), 120);
  });
  input.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown') {
      const first = results.querySelector('a');
      if (first) { e.preventDefault(); first.focus(); }
    } else if (e.key === 'Enter') {
      const first = results.querySelector('a');
      if (first) location.href = first.getAttribute('href');
    } else if (e.key === 'Escape') {
      close();
      input.blur();
      if (mqMobile.matches) closeTakeover();
    }
  });
  results.addEventListener('keydown', e => {
    const hits = [...results.querySelectorAll('a')];
    const i = hits.indexOf(document.activeElement);
    if (e.key === 'ArrowDown' && i > -1 && i < hits.length - 1) { e.preventDefault(); hits[i + 1].focus(); }
    else if (e.key === 'ArrowUp' && i > 0) { e.preventDefault(); hits[i - 1].focus(); }
    else if (e.key === 'ArrowUp' && i === 0) { e.preventDefault(); input.focus(); }
    else if (e.key === 'Escape') { close(); input.focus(); }
  });
  document.addEventListener('click', e => { if (!wrap.contains(e.target)) close(); });
})();

// Accessibility: skip link, decorative art, icon svgs, aria-current
(() => {
  const main = document.querySelector('main');
  if (main && !document.querySelector('.skip-link')) {
    if (!main.id) main.id = 'main';
    const a = document.createElement('a');
    a.href = '#' + main.id;
    a.className = 'skip-link';
    a.textContent = 'Skip to content';
    document.body.insertBefore(a, document.body.firstChild);
  }
  document.querySelectorAll('.demo, .chart').forEach(el => el.setAttribute('aria-hidden', 'true'));
  document.querySelectorAll('.hamburger svg, .menu-close svg, .settings-btn svg, .footer-social svg, .elsewhere svg, .search-ico, .search-clear svg, .ref-list svg, .arrow svg, .pp-term .li svg').forEach(el => {
    el.setAttribute('aria-hidden', 'true');
    el.setAttribute('focusable', 'false');
  });
  document.querySelectorAll('.menu-link.active').forEach(el => el.setAttribute('aria-current', 'page'));
})();

// Track recently viewed pages for the search panel
(() => {
  try {
    const page = (location.pathname.split('/').pop() || 'index.html');
    const title = ((document.title.split(' \u2014 ')[0] || '').split(':')[0] || '').trim();
    if (!title) return;
    let recent = [];
    try { recent = JSON.parse(localStorage.getItem('ux-recent') || '[]'); } catch (e) {}
    recent = recent.filter(r => r.u !== page);
    recent.unshift({ t: title, u: page });
    localStorage.setItem('ux-recent', JSON.stringify(recent.slice(0, 8)));
  } catch (e) {}
})();

// Bookmarks and sharing
(() => {
  const T = k => (window.uxT && window.uxT(k)) || k;
  const BM_KEY = 'ux-bookmarks';
  const getBM = () => { try { return JSON.parse(localStorage.getItem(BM_KEY) || '[]'); } catch (e) { return []; } };
  const setBM = list => { try { localStorage.setItem(BM_KEY, JSON.stringify(list.slice(0, 24))); } catch (e) {} };
  window.uxBookmarks = getBM;

  const page = (location.pathname.split('/').pop() || 'index.html');
  const pageTitle = () => ((document.title.split(' — ')[0] || '').split(':')[0] || '').trim();
  const url = 'https://www.ux-guidelines.com/' + page;
  const enc = encodeURIComponent;

  // ---- Title actions: bookmark + share beside the page h1 (detail pages) ----
  const h1 = document.querySelector('header h1');
  if (h1 && page !== 'index.html') {
    const row = document.createElement('div');
    row.className = 'title-row';
    h1.parentNode.insertBefore(row, h1);
    row.appendChild(h1);
    const actions = document.createElement('div');
    actions.className = 'title-actions';
    row.appendChild(actions);

    const bm = document.createElement('button');
    bm.className = 'title-act bookmark-btn';
    bm.setAttribute('aria-label', 'Bookmark this page');
    const bmSvg = filled => '<svg viewBox="0 0 24 24" width="22" height="22" fill="' + (filled ? 'currentColor' : 'none') + '" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>';
    const isBM = () => getBM().some(b => b.u === page);
    const syncBM = () => { const on = isBM(); bm.innerHTML = bmSvg(on); bm.classList.toggle('on', on); bm.setAttribute('aria-pressed', String(on)); };
    syncBM();
    bm.addEventListener('click', () => {
      let list = getBM();
      if (isBM()) list = list.filter(b => b.u !== page);
      else list.unshift({ t: pageTitle(), u: page });
      setBM(list);
      syncBM();
    });
    actions.appendChild(bm);

    const shareWrap = document.createElement('div');
    shareWrap.className = 'share-wrap';
    const sh = document.createElement('button');
    sh.className = 'title-act share-btn';
    sh.setAttribute('aria-label', 'Share this page');
    sh.setAttribute('aria-haspopup', 'true');
    sh.setAttribute('aria-expanded', 'false');
    sh.innerHTML = '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>';
    const menu = document.createElement('div');
    menu.className = 'share-menu';
    menu.setAttribute('role', 'menu');
    shareWrap.appendChild(sh);
    shareWrap.appendChild(menu);
    actions.appendChild(shareWrap);

    const BRAND = 'fill="currentColor" stroke="none"';
    const icon = (path, brand) => '<svg viewBox="0 0 24 24" width="16" height="16" ' + (brand ? BRAND : 'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"') + ' aria-hidden="true" focusable="false">' + path + '</svg>';
    const P = {
      x: '<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644z"/>',
      li: '<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>',
      fb: '<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>',
      bs: '<path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8z"/>',
      mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
      link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>'
    };
    const buildMenu = () => {
      const t = pageTitle();
      const metaDesc = document.querySelector('meta[name="description"]');
      const summary = (metaDesc && metaDesc.content || t).trim();
      // trim to a character budget on a word boundary
      const clip = (s, max) => {
        if (s.length <= max) return s;
        const cut = s.slice(0, max - 1);
        return cut.slice(0, Math.max(cut.lastIndexOf(' '), 40)) + '…';
      };
      // X: 280 chars, links count as 23; the URL goes on its own line at the end
      const xText = t + ' — ' + clip(summary, 280 - 23 - t.length - 6) + '\n' + url;
      // Bluesky: 300 chars, the URL counts in full; URL on its own line at the end
      const bsText = t + ' — ' + clip(summary, 300 - url.length - t.length - 7) + '\n' + url;
      menu.innerHTML = '';
      const items = [
        ['X', 'https://twitter.com/intent/tweet?text=' + enc(xText), P.x, true],
        ['LinkedIn', 'https://www.linkedin.com/sharing/share-offsite/?url=' + enc(url), P.li, true],
        ['Facebook', 'https://www.facebook.com/sharer/sharer.php?u=' + enc(url) + '&quote=' + enc(clip(summary, 240)), P.fb, true],
        ['Bluesky', 'https://bsky.app/intent/compose?text=' + enc(bsText), P.bs, true],
        ['Email', 'mailto:?subject=' + enc(t) + '&body=' + enc(summary + '\n\n' + url), P.mail, false]
      ];
      items.forEach(([name, href, path, brand]) => {
        const a = document.createElement('a');
        a.className = 'share-item';
        a.setAttribute('role', 'menuitem');
        a.href = href;
        if (name !== 'Email') { a.target = '_blank'; a.rel = 'noopener'; }
        a.innerHTML = icon(path, brand && name !== 'Email') + '<span class="share-label">' + T(name) + '</span>';
        menu.appendChild(a);
      });
      const cp = document.createElement('button');
      cp.className = 'share-item';
      cp.setAttribute('role', 'menuitem');
      cp.innerHTML = icon(P.link, false) + '<span class="share-label">' + T('Copy link') + '</span>';
      cp.addEventListener('click', () => {
        const done = () => { cp.querySelector('.share-label').textContent = T('Copied'); setTimeout(closeShare, 900); };
        if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(url).then(done, done);
        else done();
      });
      menu.appendChild(cp);
    };
    const openShare = () => { buildMenu(); menu.classList.add('open'); sh.setAttribute('aria-expanded', 'true'); const f = menu.querySelector('.share-item'); if (f) f.focus(); };
    const closeShare = () => { const was = menu.classList.contains('open'); menu.classList.remove('open'); sh.setAttribute('aria-expanded', 'false'); if (was && menu.contains(document.activeElement)) sh.focus(); };
    sh.addEventListener('click', () => menu.classList.contains('open') ? closeShare() : openShare());
    document.addEventListener('click', e => { if (!shareWrap.contains(e.target)) closeShare(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeShare(); });
  }

  // ---- Topnav bookmark list, left of the settings gear ----
  const topnav = document.querySelector('.topnav');
  const settingsWrap = document.querySelector('.settings-wrap');
  if (topnav && settingsWrap) {
    const wrap = document.createElement('div');
    wrap.className = 'bm-wrap';
    const btn = document.createElement('button');
    btn.className = 'settings-btn bm-nav-btn';
    btn.setAttribute('aria-label', 'Bookmarks');
    btn.setAttribute('aria-haspopup', 'true');
    btn.setAttribute('aria-expanded', 'false');
    btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>';
    wrap.appendChild(btn);
    topnav.insertBefore(wrap, settingsWrap);

    const panel = document.createElement('div');
    panel.className = 'bm-panel';
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-label', 'Bookmarks');
    panel.setAttribute('tabindex', '-1');
    document.body.appendChild(panel);

    const build = () => {
      panel.innerHTML = '';
      const lab = document.createElement('div');
      lab.className = 'bm-label';
      lab.textContent = T('Bookmarked');
      panel.appendChild(lab);
      const list = getBM();
      if (!list.length) {
        const e = document.createElement('div');
        e.className = 'bm-empty';
        e.textContent = T('No bookmarks yet');
        panel.appendChild(e);
        return;
      }
      list.forEach(b => {
        const row = document.createElement('div');
        row.className = 'bm-row';
        const a = document.createElement('a');
        a.href = b.u;
        a.className = 'bm-item';
        a.textContent = b.t;
        const x = document.createElement('button');
        x.className = 'bm-remove';
        x.setAttribute('aria-label', 'Remove bookmark');
        x.innerHTML = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true" focusable="false"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>';
        x.addEventListener('click', () => {
          setBM(getBM().filter(i => i.u !== b.u));
          build();
          const pb = document.querySelector('.bookmark-btn');
          if (pb && b.u === page) { pb.classList.remove('on'); pb.setAttribute('aria-pressed', 'false'); pb.innerHTML = pb.innerHTML.replace('fill="currentColor"', 'fill="none"'); }
        });
        row.appendChild(a);
        row.appendChild(x);
        panel.appendChild(row);
      });
    };
    const open = () => { build(); panel.style.top = Math.round(topnav.getBoundingClientRect().bottom) + 'px'; panel.classList.add('open'); btn.setAttribute('aria-expanded', 'true'); (panel.querySelector('a, button') || panel).focus(); };
    const close = () => { const was = panel.classList.contains('open'); panel.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); if (was && panel.contains(document.activeElement)) btn.focus(); };
    btn.addEventListener('click', () => panel.classList.contains('open') ? close() : open());
    document.addEventListener('click', e => { if (!panel.contains(e.target) && !wrap.contains(e.target)) close(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  }
})();
