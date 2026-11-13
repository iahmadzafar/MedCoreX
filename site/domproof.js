#!/usr/bin/env node
/* Runtime proof for the homepage hub: drives the real DOM (jsdom).
   Covers: catalogue tabs per shelf, panel rendering, tab switching + keyboard,
   live text filter, resume card. The catalogue lives in /assets/catalog.js —
   jsdom never fetches http URLs, so it is inlined before the app script runs.
   Needs: npm i jsdom     Run: node domproof.js */
const fs = require('fs');
const path = require('path');
const { JSDOM, VirtualConsole } = require('jsdom');

const SITE = __dirname;
const RES = path.join(SITE, 'resources');
let fails = 0;
const ok = m => console.log('  ✓ ' + m);
const bad = m => { fails++; console.log('  ✗ ' + m); };

const errors = [];
const vc = new VirtualConsole();
vc.on('jsdomError', e => { if (!/navigation|not implemented/i.test(e.message)) errors.push(e.message); });

const CAT_SRC = fs.readFileSync(path.join(SITE, 'assets', 'catalog.js'), 'utf8');
let html = fs.readFileSync(path.join(SITE, 'index.html'), 'utf8')
  .replace('<script src="/assets/catalog.js"></script>', '<script>' + CAT_SRC + '</script>')
  .replace(/<script src="\/assets\/studyverse\.js"><\/script>/, '')
  .replace(/<script src="\/medcore-sync\.js" defer><\/script>/, '')
  .replace(/<script src="\/auth-nav\.js" defer><\/script>/, '');

const dom = new JSDOM(html, {
  url: 'http://localhost/', runScripts: 'dangerously', pretendToBeVisual: true, virtualConsole: vc,
  beforeParse(w) {
    w.matchMedia = q => ({ matches: false, media: q, onchange: null, addListener(){}, removeListener(){}, addEventListener(){}, removeEventListener(){}, dispatchEvent(){ return false; } });
    w.Element.prototype.scrollIntoView = function () {};   // jsdom has no layout engine
    w.SV = { countUp(){}, stagger(){}, toast(){}, burst(){}, burstAt(){} };
  },
});

const w = dom.window, d = w.document;
const click = el => el.dispatchEvent(new w.MouseEvent('click', { bubbles: true, cancelable: true }));

/* expected catalogue shape, parsed from the same source the page eats */
const catItems = [];
{ const re = /\{t:"([^"]+)",d:"([^"]*)",c:"([^"]+)",f:"([^"]+)",k:([0-9.]+)\}/g; let m; while ((m = re.exec(CAT_SRC))) catItems.push({ t: m[1], c: m[3], f: m[4] }); }
const CATS = [...new Set(catItems.map(i => i.c))];

setTimeout(() => {
  console.log('[runtime] homepage hub — catalogue tabs, filter, resume\n');

  // tabs + panels
  const tabs = [...d.querySelectorAll('#tablist .chip')];
  if (tabs.length === CATS.length) ok('filter chips: one per shelf (' + CATS.length + ')'); else bad('chips: ' + tabs.length);
  const panels = [...d.querySelectorAll('#panels .panel')];
  if (panels.length === CATS.length && !panels[0].hidden && panels.slice(1).every(p => p.hidden)) ok('first shelf visible, rest hidden');
  else bad('panel visibility wrong');

  // items render, every Open link resolves on disk
  const items = [...d.querySelectorAll('#panels .faqitem')];
  if (items.length === catItems.length) ok('all ' + catItems.length + ' catalogue items render'); else bad('items: ' + items.length);
  const dead = items.filter(a => {
    const f = a.querySelector('a.btn').getAttribute('href').replace('/resources/', '');
    return !fs.existsSync(path.join(RES, f + '.html')) && !fs.existsSync(path.join(RES, f));
  });
  if (!dead.length) ok('every Open link resolves to a real file on disk'); else bad(dead.length + ' dead links');

  // tab switch by click
  const mockTab = tabs[CATS.indexOf('Mocks & Drills')];
  click(mockTab);
  const mockPanel = panels[CATS.indexOf('Mocks & Drills')];
  if (!mockPanel.hidden && panels[0].hidden && mockTab.getAttribute('aria-selected') === 'true')
    ok('clicking the Mocks & Drills chip shows its panel (the one true bank shelf)');
  else bad('tab switch failed');

  // tab switch by keyboard (reset to shelf 0 first — the click above moved the cursor)
  click(tabs[0]);
  tabs[0].focus();
  tabs[0].dispatchEvent(new w.KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true, cancelable: true }));
  if (!panels[1].hidden && panels[0].hidden) ok('ArrowRight moves the shelf'); else bad('keyboard nav failed');
  tabs[0].dispatchEvent(new w.KeyboardEvent('keydown', { key: 'ArrowLeft', bubbles: true, cancelable: true }));
  if (!panels[0].hidden) ok('ArrowLeft moves back'); else bad('keyboard nav back failed');

  // live text filter
  const q = d.getElementById('q');
  q.value = 'memory';
  q.dispatchEvent(new w.Event('input', { bubbles: true }));
  const visible = [...d.querySelectorAll('#panels .faqitem')].filter(x => x.style.display !== 'none');
  if (visible.length === 1 && /Memory Master/.test(visible[0].textContent)) ok('live filter "memory" → Memory Master only'); else bad('text filter: ' + visible.length);
  q.value = '';
  q.dispatchEvent(new w.Event('input', { bubbles: true }));
  const visible2 = [...d.querySelectorAll('#panels .faqitem')].filter(x => x.style.display !== 'none');
  if (visible2.length === catItems.length) ok('clearing the filter restores every item'); else bad('filter reset: ' + visible2.length);
  q.value = 'zzzunfindable';
  q.dispatchEvent(new w.Event('input', { bubbles: true }));
  if (d.querySelector('#panels .nores')) ok('no-match state renders'); else bad('no nores message');
  q.value = '';
  q.dispatchEvent(new w.Event('input', { bubbles: true }));

  // resume card stays dormant without history
  if (!d.getElementById('resume').classList.contains('on')) ok('resume card dormant with no reading history'); else bad('resume card lit without history');

  if (!errors.length) ok('zero uncaught JS errors'); else errors.slice(0, 4).forEach(e => bad(e));
  console.log('\n' + (fails ? '✗ ' + fails + ' failure(s)' : '✓ DOM PROVEN — tabs, panels, filter, keyboard, resume, zero errors'));
  process.exit(fails ? 1 : 0);
}, 300);
