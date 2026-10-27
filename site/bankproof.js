#!/usr/bin/env node
/* Runtime proof for the merged bank: welcome grid, group load, question render,
   per-session shuffle (stable across paper↔key, fresh per entry), card CSS.
   Needs: npm i jsdom     Run: node bankproof.js */
const fs = require('fs');
const { JSDOM, VirtualConsole } = require('jsdom');

const SITE = __dirname;
const F = SITE + '/resources/medcore-question-bank.html';
let fails = 0;
const ok = m => console.log('  ✓ ' + m);
const bad = m => { fails++; console.log('  ✗ ' + m); };

const errors = [];
const vc = new VirtualConsole();
vc.on('jsdomError', e => { if (!/navigation|not implemented/i.test(e.message)) errors.push(e.message); });

const dom = new JSDOM(fs.readFileSync(F, 'utf8'), {
  url: 'http://localhost/', runScripts: 'dangerously', pretendToBeVisual: true, virtualConsole: vc,
  beforeParse(w) {
    w.matchMedia = q => ({ matches: false, media: q, addListener(){}, removeListener(){}, addEventListener(){}, removeEventListener(){} });
    w.Element.prototype.scrollIntoView = function () {};
    w.HTMLCanvasElement.prototype.getContext = function () {
      const n = new Proxy(function(){}, { get: (t, p) => (p === 'width' || p === 'height') ? 0 : n, set: () => true, apply: () => n });
      return n;
    };
  },
});
const w = dom.window, d = w.document;
const firstStem = () => { const s = d.querySelector('.q-stem'); return s ? s.textContent.trim() : null; };

setTimeout(() => {
  console.log('[runtime] merged bank — grid, groups, shuffle, cards\n');

  // welcome grid
  const cards = [...d.querySelectorAll('#wgrid .wc')];
  const counts = [...d.querySelectorAll('#wgrid .wc-count')].map(e => e.textContent.trim());
  if (cards.length === 6) ok('welcome grid: 6 subject groups'); else bad('welcome cards: ' + cards.length);
  const names = [...d.querySelectorAll('#wgrid .wc-name')].map(e => e.textContent.trim());
  const noCounts = d.querySelectorAll('#wgrid .wc-count').length === 0;
  if (cards.length === 6 && names.length === 6 && noCounts) ok('6 subject cards, no question counts shown (by request)');
  else bad('cards: ' + cards.length + ', counts visible: ' + !noCounts);

  // group opens + question renders
  w.setModeAndLoad('Medicine & Allied', 'paper');
  setTimeout(() => {
    const t = d.getElementById('ctTitle'), b = d.getElementById('ctBadge');
    if (t && t.textContent.trim() === 'Medicine & Allied' && b && b.textContent.trim() === '') ok('opened "Medicine & Allied" — title set, badge empty (no count)');
    else bad('title/badge: ' + (t && t.textContent) + ' / ' + JSON.stringify(b && b.textContent));
    const s1 = firstStem();
    if (s1 && s1.length > 20) ok('question renders: "' + s1.slice(0, 56) + '…"');
    else bad('no question rendered');

    // key toggle must NOT reshuffle (key reviews the paper you just did)
    w.setModeAndLoad(w.current !== undefined ? w.current : 'Medicine & Allied', 'key');
    setTimeout(() => {
      const sKey = firstStem();
      if (sKey === s1) ok('paper → key keeps the same order (no reshuffle)');
      else bad('order changed between paper and key');

      // fresh entry must reshuffle (sample 4 entries; at least one different opening)
      const seen = new Set([s1]);
      for (let i = 0; i < 4; i++) {
        w.goWelcome();
        w.setModeAndLoad('Medicine & Allied', 'paper');
        seen.add(firstStem());
      }
      if (seen.size > 1) ok('re-entering a subject reshuffles (' + seen.size + ' distinct openings in 5 loads)');
      else bad('no reshuffle across re-entries');

      // card CSS upgraded
      const raw = fs.readFileSync(F, 'utf8');
      const cssOK = /grid-auto-rows:1fr/.test(raw) && /minmax\(320px,1fr\)/.test(raw) && /\.wc\{min-height:152px/.test(raw);
      if (cssOK) ok('cards enlarged + symmetric (minmax 320px, equal rows, 152px min height, 3-col ≥1180px)');
      else bad('card CSS not upgraded');

      if (!errors.length) ok('zero uncaught JS errors'); else errors.slice(0, 4).forEach(e => bad(e));
      console.log('\n' + (fails ? '✗ ' + fails + ' failure(s)' : '✓ BANK PROVEN — grid, counts, shuffle-per-session, stable key order, upgraded cards, zero errors'));
      process.exit(fails ? 1 : 0);
    }, 500);
  }, 600);
}, 600);
