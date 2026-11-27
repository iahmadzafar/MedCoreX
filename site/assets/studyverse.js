/* ============================================================
   MedCoreX · Studyverse KIT — site/assets/studyverse.js
   The one shared theme engine. Load in <head> WITHOUT defer:
   it sets data-theme on <html> before first paint (no flash),
   then waits for DOMContentLoaded for anything touching elements.
   Pages use window.SV.* only — they must never reimplement
   theme/toast/confetti/count-up.

   Direction 2 · Graphite and Ember is FIXED fleet-wide since
   Nov 18 2026: this engine no longer invents palettes. All
   colour, type and surface values come from
   studyverse-tokens.css through the token cascade. What the
   engine owns: dark/light mode, the topbar cluster (mode toggle
   + hide-topbar chevron), the Library shelves dropdown, the
   phone burger, the toast, and the shared helpers.
   ============================================================ */
(function () {
'use strict';

/* line icons for the engine chip — no emoji, currentColor, theme-aware */
const IC = {
  sun:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4"/></svg>',
  moon:'<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" stroke="none" aria-hidden="true"><path d="M20.4 14.2A9 9 0 1 1 9.8 3.6a7.2 7.2 0 0 0 10.6 10.6z"/></svg>',
  up:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 14 6-6 6 6"/></svg>',
  burger:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>'
};

const THEME_NAME = 'Graphite and Ember';
const MKEY = 'mx-mode';
const reducedMotion = () => window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ── mode (system preference until the visitor chooses) ── */
function paint() {
  const r = document.documentElement;
  r.dataset.pattern = 'plain';
  const tn = document.getElementById('themeName');
  if (tn) tn.textContent = THEME_NAME;
  try { document.dispatchEvent(new CustomEvent('sv:theme', { detail: { theme: THEME_NAME, mode: r.dataset.theme } })); } catch (e) {}
}
function syncMode() {
  const b = document.getElementById('modeBtn');
  if (!b) return;
  const dark = document.documentElement.dataset.theme === 'dark';
  b.setAttribute('aria-pressed', String(dark));
  b.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
  b.innerHTML = dark ? IC.sun : IC.moon;
}
function setMode(mode) {
  document.documentElement.dataset.theme = mode;
  /* the seven legacy "banktheme" pages key off data-mode and
     medcore.theme — the engine writes all three so site-wide mode
     is one thing, not two competing systems */
  document.documentElement.setAttribute('data-mode', mode);
  /* legacy pages keying on html.light / html.dark follow the site mode */
  document.documentElement.classList.toggle('light', mode === 'light');
  document.documentElement.classList.toggle('dark', mode === 'dark');
  try { localStorage.setItem(MKEY, mode); localStorage.setItem('medcore.theme', mode); } catch (e) {}
  syncMode(); paint();
}
function initMode() {
  let m = null;
  try {
    const saved = localStorage.getItem(MKEY);
    if (saved === 'dark' || saved === 'light') m = saved;
    else {
      const legacy = localStorage.getItem('medcore.theme');
      if (legacy === 'dark' || legacy === 'light') m = legacy;
      else {
        const migrating = localStorage.getItem('mlx-theme');
        if (migrating === 'dark' || migrating === 'light') m = migrating;
      }
    }
  } catch (e) {}
  if (m !== 'dark' && m !== 'light') {
    try {
      m = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    } catch (e) { m = 'dark'; }
  }
  document.documentElement.dataset.theme = m;
  document.documentElement.setAttribute('data-mode', m);
  paint(); syncMode();
}
/* two-way sync with legacy pages that keep their own toggle:
   they write medcore.theme (storage, cross-tab) or set data-mode
   (same tab, watched) — the site mode follows either way */
addEventListener('storage', function (e) {
  if ((e.key === MKEY || e.key === 'medcore.theme') && (e.newValue === 'dark' || e.newValue === 'light')) setMode(e.newValue);
});
try {
  new MutationObserver(function (records) {
    const el = document.documentElement;
    /* trust whichever attribute the page actually changed, so a class
       toggle is never shadowed by a stale-but-valid data-mode */
    for (const rec of records) {
      if (rec.attributeName === 'data-mode') {
        const v = el.getAttribute('data-mode');
        if (v === 'dark' || v === 'light') { if (el.dataset.theme !== v) setMode(v); return; }
      }
      if (rec.attributeName === 'class') {
        const cls = el.classList.contains('light') ? 'light' : (el.classList.contains('dark') ? 'dark' : null);
        if (cls && el.dataset.theme !== cls) { setMode(cls); return; }
      }
    }
  }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-mode', 'class'] });
} catch (e) {}
document.addEventListener('click', function (e) {
  if (e.target && e.target.id === 'modeBtn') {
    setMode(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
  }
});

/* ── shared helpers (public API: pages use SV.* only) ── */
let tt;
function toast(msg, kind) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.toggle('theme-toast', !!kind);
  t.classList.add('show');
  clearTimeout(tt);
  tt = setTimeout(function () { t.classList.remove('show', 'theme-toast'); }, 2200);
}
function burst(x, y, n) {
  if (reducedMotion()) return;
  const total = n || 34;
  for (let i = 0; i < total; i++) {
    const c = document.createElement('span');
    c.className = 'confetti';
    c.style.cssText = 'left:' + x + 'px;top:' + y + 'px;background:var(--c' + (1 + i % 4) +
      ');border-radius:' + (i % 3 ? '2px' : '50%');
    document.body.appendChild(c);
    const a = Math.random() * Math.PI * 2, dist = 80 + Math.random() * 140;
    c.animate([
      { transform: 'translate(0,0) rotate(0)', opacity: 1 },
      { transform: 'translate(' + Math.cos(a) * dist + 'px,' + (Math.sin(a) * dist + 120) + 'px) rotate(' + (-540 + Math.random() * 1080) + 'deg)', opacity: 0 }
    ], { duration: 800 + Math.random() * 500, easing: 'cubic-bezier(.2,.7,.3,1)' }).onfinish = function () { c.remove(); };
  }
}
function burstAt(el) {
  if (!el) return;
  const r = el.getBoundingClientRect();
  burst(r.left + r.width / 2, r.top + r.height / 2);
}
function countUp(el, to, suffix) {
  if (!el) return;
  const s = suffix || '';
  if (reducedMotion()) { el.textContent = to + s; return; }
  const t0 = performance.now();
  const frame = function (t) {
    const p = Math.min(1, (t - t0) / 900);
    el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))) + s;
    if (p < 1) requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);
}
function stagger(root) {
  if (!root) return;
  root.querySelectorAll('.rv').forEach(function (el, i) { el.style.setProperty('--i', Math.min(i, 10)); });
}

/* the public API: pages use only this */
window.SV = {
  get theme() { return THEME_NAME; },
  remix: paint,   /* kept for API compatibility; the palette is fixed */
  toast, burst, burstAt, countUp, stagger
};

/* ── topbar cluster: mode toggle only (remix/lock retired) ── */
const CHIP_HTML = '<button class="icon-btn" id="modeBtn" type="button" aria-label="Toggle dark mode">' + IC.moon + '</button>';
function fillChips() {
  let hosts = document.querySelectorAll('[data-sv-engine]');
  /* pages without a topbar (legacy documents) get a floating control,
     so every page in the fleet has the mode toggle */
  const ownControl = document.querySelector('[aria-label*="theme" i],[aria-label*="mode" i],[title*="theme" i],[id*="Mode"],[id*="Fam"],[id="modeBtn"],[id="themeBtn"]');
  if (!hosts.length && !ownControl) {
    document.body.insertAdjacentHTML('beforeend', '<div class="engine sv-float" data-sv-engine></div>');
    hosts = document.querySelectorAll('[data-sv-engine]');
  }
  hosts.forEach(function (el) {
    if (el.dataset.svDone) return;
    el.innerHTML = CHIP_HTML;
    el.dataset.svDone = '1';
  });
  syncMode();
}

/* ── Library shelves, one dropdown away from the nav link ── */
const SHELVES = [
  ['Core Books','core-books'], ['Mocks & Drills','mocks-drills'],
  ['Past Papers','past-papers-answer-keys'], ['Exam Intelligence & Strategy','exam-intelligence-strategy'],
  ['Quick Reference','quick-reference'], ['Frameworks & Interactive','frameworks-interactive'],
  ['MedCORE Systems','medcore-systems']
];
function buildNavMenu() {
  const a = document.querySelector('.links a[href="/library"]');
  if (!a || a.parentNode.classList.contains('navdrop')) return;
  const w = document.createElement('span');
  w.className = 'navdrop';
  a.parentNode.insertBefore(w, a);
  w.appendChild(a);
  w.insertAdjacentHTML('beforeend', '<div class="navmenu"><a class="all" href="/library">All shelves</a>' +
    SHELVES.map(function (s) { return '<a href="/library#' + s[1] + '">' + s[0] + '</a>'; }).join('') + '</div>');
}

/* ── burger — phones only (≤900px CSS hides it) ── */
function buildBurger() {
  const wrap = document.querySelector('.nav .wrap');
  if (!wrap || wrap.querySelector('.burger')) return;
  wrap.insertAdjacentHTML('beforeend', '<button class="burger" type="button" aria-label="Menu" aria-expanded="false" aria-controls="navLinks">' +
    '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>');
  const nav = wrap.closest('.nav'), btn = wrap.querySelector('.burger'), links = wrap.querySelector('.links');
  if (links && !links.id) links.id = 'navLinks';
  function set(open) {
    nav.classList.toggle('burger-open', open);
    btn.setAttribute('aria-expanded', String(open));
  }
  btn.addEventListener('click', function (e) { e.stopPropagation(); set(!nav.classList.contains('burger-open')); });
  if (links) links.addEventListener('click', function (e) { if (e.target.closest('a')) set(false); });
  document.addEventListener('click', function (e) { if (!nav.contains(e.target)) set(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') set(false); });
}

function boot() {
  if (!document.getElementById('toast')) {
    document.body.insertAdjacentHTML('beforeend', '<div class="toast" id="toast" role="status"></div>');
  }
  fillChips();
  buildNavMenu();
  buildBurger();
  paint(); syncMode();
}

/* mode first: set before first paint so there is no theme flash */
initMode();
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
else boot();
})();
