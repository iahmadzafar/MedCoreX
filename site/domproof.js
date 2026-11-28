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
const HOME_SRC = fs.readFileSync(path.join(SITE, 'assets', 'home', 'home.js'), 'utf8');
const PAGE_SRC = fs.readFileSync(path.join(SITE, 'index.html'), 'utf8');
let html = PAGE_SRC
  .replace('<script src="/assets/catalog.js"></script>', '<script>' + CAT_SRC + '</script>')
  .replace('<script src="/assets/catalog.js" defer></script>', '<script>' + CAT_SRC + '</script>')
  .replace('<script src="/assets/home/home.js" defer></script>', '<script>' + HOME_SRC + '</script>')
  .replace('<script type="module" src="/assets/home/device.js"></script>', '')
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
  console.log('[runtime] homepage monitor and catalogue\n');

  // monitor's static structure remains readable even when the canvas module is not loaded by jsdom
  const monitor = d.getElementById('monitor');
  const readings = monitor ? [...monitor.querySelectorAll('.reading')] : [];
  const screen = d.querySelector('#screen[role="img"]');
  if (monitor && readings.length === 5 && screen && /Simulated waveforms/.test(screen.getAttribute('aria-label')))
    ok('monitor exposes five readable measurements and an accessible simulated screen');
  else bad('monitor measurements or accessible simulated screen missing');
  if (monitor && /Simulated · not live/.test(monitor.textContent) && d.getElementById('ledPower') && d.getElementById('ledAlarm'))
    ok('monitor is labelled simulated and exposes power/alarm controls');
  else bad('monitor status or power/alarm controls missing');

  // tabs + panels from the current homepage markup
  const tabs = [...d.querySelectorAll('#tablist [role="tab"]')];
  if (tabs.length === CATS.length) ok('one catalogue tab per shelf (' + CATS.length + ')'); else bad('tabs: ' + tabs.length);
  const panels = tabs.map(t => d.getElementById(t.getAttribute('aria-controls')));
  if (panels.length === CATS.length && panels.every(Boolean) && !panels[0].hidden && panels.slice(1).every(p => p.hidden))
    ok('first shelf visible, remaining panels hidden');
  else bad('panel visibility or tab controls wrong');

  // every catalog item renders once and its resource route resolves on disk
  const rows = [...d.querySelectorAll('.panel-list li')];
  if (rows.length === catItems.length) ok('all ' + catItems.length + ' catalogue items render'); else bad('items: ' + rows.length);
  const dead = rows.filter(li => {
    const link = li.querySelector('a[href]');
    if (!link) return true;
    const route = decodeURIComponent(new URL(link.href).pathname.replace(/^\/resources\//, ''));
    const base = path.join(RES, route);
    return !fs.existsSync(base) && !fs.existsSync(base + '.html') && !fs.existsSync(path.join(base, 'index.html'));
  });
  if (!dead.length) ok('every catalogue link resolves to a real file on disk'); else bad(dead.length + ' dead links');

  // tab switch by click
  const mockIndex = CATS.indexOf('Mocks & Drills');
  const mockTab = tabs[mockIndex], mockPanel = panels[mockIndex];
  if (mockTab) click(mockTab);
  if (mockPanel && !mockPanel.hidden && panels[0].hidden && mockTab.getAttribute('aria-selected') === 'true')
    ok('clicking Mocks & Drills selects its panel');
  else bad('tab switch failed');

  // tab switch by keyboard
  if (tabs[0]) click(tabs[0]);
  tabs[0]?.focus();
  tabs[0]?.dispatchEvent(new w.KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true, cancelable: true }));
  if (panels[1] && !panels[1].hidden && panels[0].hidden) ok('ArrowRight advances the shelf'); else bad('keyboard forward navigation failed');
  tabs[1]?.dispatchEvent(new w.KeyboardEvent('keydown', { key: 'ArrowLeft', bubbles: true, cancelable: true }));
  if (panels[0] && !panels[0].hidden) ok('ArrowLeft returns to the previous shelf'); else bad('keyboard backward navigation failed');

  // live text filter applies to the selected panel and restores its full list
  const q = d.getElementById('filter');
  if (q) {
    q.value = 'memory';
    q.dispatchEvent(new w.Event('input', { bubbles: true }));
  }
  const coreRows = panels[0] ? [...panels[0].querySelectorAll('.panel-list li')] : [];
  const visible = coreRows.filter(li => !li.hidden);
  if (visible.length === 1 && /Memory Master/.test(visible[0].textContent)) ok('live filter "memory" shows Memory Master only');
  else bad('text filter: ' + visible.length);
  if (q) {
    q.value = '';
    q.dispatchEvent(new w.Event('input', { bubbles: true }));
  }
  if (coreRows.filter(li => !li.hidden).length === catItems.filter(it => it.c === CATS[0]).length)
    ok('clearing the filter restores the active shelf');
  else bad('filter reset did not restore the shelf');
  if (q) {
    q.value = 'zzzunfindable';
    q.dispatchEvent(new w.Event('input', { bubbles: true }));
  }
  if (d.getElementById('nores') && !d.getElementById('nores').hidden) ok('no-match state renders');
  else bad('no nores message');

  // resume card remains dormant without reading history
  if (d.getElementById('resume')?.hidden) ok('resume card dormant with no reading history'); else bad('resume card lit without history');

  if (!errors.length) ok('zero uncaught JS errors'); else errors.slice(0, 4).forEach(e => bad(e));
  console.log('\n' + (fails ? '✗ ' + fails + ' failure(s)' : '✓ DOM PROVEN — tabs, panels, filter, keyboard, resume, zero errors'));
  process.exit(fails ? 1 : 0);
}, 300);
