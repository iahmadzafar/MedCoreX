#!/usr/bin/env node
/* Runtime proof for the hub: drives the real DOM (jsdom).
   Covers: grid + chips + live filter + recents + theme toggle + theme sync + palette.
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

const dom = new JSDOM(fs.readFileSync(path.join(SITE, 'index.html'), 'utf8'), {
  url: 'http://localhost/', runScripts: 'dangerously', pretendToBeVisual: true, virtualConsole: vc,
  beforeParse(w) {
    w.matchMedia = q => ({ matches: false, media: q, onchange: null, addListener(){}, removeListener(){}, addEventListener(){}, removeEventListener(){}, dispatchEvent(){ return false; } });
    w.Element.prototype.scrollIntoView = function () {};   // jsdom has no layout engine
    w.HTMLCanvasElement.prototype.getContext = function () {
      const n = new Proxy(function(){}, { get: (t, p) => (p === 'width' || p === 'height') ? 0 : n, set: () => true, apply: () => n });
      return n;
    };
  },
});

const w = dom.window, d = w.document;
const click = el => el.dispatchEvent(new w.MouseEvent('click', { bubbles: true, cancelable: true }));

setTimeout(() => {
  console.log('[runtime] hub — interactive library + theme\n');

  // grid + chips
  const cards = [...d.querySelectorAll('#rgrid .rcard')];
  const chips = [...d.querySelectorAll('#browse .chip')];
  if (cards.length === 36) ok('resource grid renders all 36 files'); else bad('grid cards: ' + cards.length);
  if (chips.length === 8) ok('filter chips: All + 7 groups'); else bad('chips: ' + chips.length);
  const dead = cards.filter(a => {
    const f = a.getAttribute('href').replace('/resources/', '');
    return !fs.existsSync(path.join(RES, f + '.html')) && !fs.existsSync(path.join(RES, f));
  });
  if (!dead.length) ok('every grid card resolves to a real file on disk'); else bad(dead.length + ' dead cards');

  // chip filter
  const core = chips.find(c => c.dataset.cat === 'Core Books');
  click(core);
  const afterChip = d.querySelectorAll('#rgrid .rcard').length;
  if (afterChip === 5 && core.classList.contains('on')) ok('chip filter "Core Books" → 5 cards, chip active');
  else bad('chip filter: ' + afterChip + ' cards, active=' + core.classList.contains('on'));

  // live text filter
  const libQ = d.getElementById('libQ');
  libQ.value = 'memory';
  libQ.dispatchEvent(new w.Event('input', { bubbles: true }));
  const afterText = d.querySelectorAll('#rgrid .rcard').length;
  if (afterText === 1) ok('live filter "memory" → 1 card'); else bad('text filter: ' + afterText);

  // reset + recents tracking on click
  click(chips.find(c => c.dataset.cat === 'all'));
  libQ.value = ''; libQ.dispatchEvent(new w.Event('input', { bubbles: true }));
  click(d.querySelector('#rgrid .rcard'));
  const rec = JSON.parse(w.localStorage.getItem('medcore.recent') || '[]');
  if (rec.length === 1 && rec[0].f) ok('opening a card records it in recents ("' + rec[0].t + '")');
  else bad('recents after click: ' + JSON.stringify(rec));

  // theme: two independent axes — mode (dark/light) + family (ink/ice/copper/paper)
  const mode0 = d.documentElement.getAttribute('data-mode');
  const fam0 = d.documentElement.getAttribute('data-banktheme');
  click(d.getElementById('ttD'));
  const mode1 = d.documentElement.getAttribute('data-mode');
  if (mode0 === 'dark' && mode1 === 'light' && w.localStorage.getItem('medcore.theme') === 'light')
    ok('mode toggle: ' + mode0 + ' → ' + mode1 + ' (saved to medcore.theme)');
  else bad('mode toggle: ' + mode0 + ' → ' + mode1);

  const copper = d.querySelector('#famSeg button[data-f="copper"]');
  click(copper);
  const fam1 = d.documentElement.getAttribute('data-banktheme');
  if (fam1 === 'copper' && w.localStorage.getItem('medcore.banktheme') === 'copper' && copper.classList.contains('on'))
    ok('family picker: copper selected, saved, button active');
  else bad('family picker: got ' + fam1);

  // cross-tab / cross-page sync via the shared keys
  w.localStorage.setItem('medcore.theme', 'dark');
  w.localStorage.setItem('medcore.banktheme', 'ice');
  d.dispatchEvent(new w.Event('visibilitychange'));
  const mode2 = d.documentElement.getAttribute('data-mode');
  const fam2 = d.documentElement.getAttribute('data-banktheme');
  if (mode2 === 'dark' && fam2 === 'ice') ok('theme sync: mode+family changes elsewhere propagate on return');
  else bad('theme sync: expected dark/ice, got ' + mode2 + '/' + fam2);

  // palette still intact
  click(d.getElementById('ctaPal'));
  const palItems = d.getElementById('palList').querySelectorAll('.pal-item').length;
  if (palItems === 12) ok('command palette: opens, 12-item capped list'); else bad('palette items: ' + palItems);

  if (!errors.length) ok('zero uncaught JS errors'); else errors.slice(0, 4).forEach(e => bad(e));

  console.log('\n' + (fails ? '✗ ' + fails + ' failure(s)' : '✓ HUB PROVEN — 36-card grid, chips, live filter, recents, theme toggle + sync, palette, zero errors'));
  process.exit(fails ? 1 : 0);
}, 600);
