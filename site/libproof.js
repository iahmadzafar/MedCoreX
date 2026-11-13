#!/usr/bin/env node
/* Library router proof: single-file shelves must be direct links, not one-card portals.
   Run: node libproof.js     (exit 0 = all green)
   Needs: npm i jsdom — test-only, never deployed or linked. */
const fs = require('fs');
const path = require('path');
const { JSDOM, VirtualConsole } = require('jsdom');

const LIB = path.join(__dirname, 'library.html');
let fails = 0;
const ok = m => console.log('  ✓ ' + m);
const bad = (m, e) => { fails++; console.log('  ✗ ' + m + (e ? '  → ' + e : '')); };
const is = (cond, m, e) => (cond ? ok(m) : bad(m, e));

/* the catalogue now lives in /assets/catalog.js (external) — inline it so jsdom
   (which never fetches http URLs) can build the hub */
const CAT_SRC = fs.readFileSync(path.join(__dirname, 'assets', 'catalog.js'), 'utf8');
const inlineCatalog = (html) => html.replace('<script src="/assets/catalog.js"></script>', '<script>' + CAT_SRC + '</script>');
const catItems = () => { const out = []; const re = /\{t:"([^"]+)",d:"([^"]*)",c:"([^"]+)",f:"([^"]+)",k:([0-9.]+)\}/g; let m; while ((m = re.exec(CAT_SRC))) out.push({ c: m[3] }); return out; };

/* plain load — inline script runs as written */
function load(url) {
  const errors = [];
  const v = new VirtualConsole();
  v.on('jsdomError', e => { const m = String(e.message || e); if (!/Not implemented/i.test(m)) errors.push(m); });
  const dom = new JSDOM(inlineCatalog(fs.readFileSync(LIB, 'utf8')), {
    url, runScripts: 'dangerously', pretendToBeVisual: true, virtualConsole: v,
  });
  return { dom, errors };
}

/* patched load — location.replace() captured instead of navigating, so the target is observable */
function loadPatched(url) {
  const errors = [];
  const v = new VirtualConsole();
  v.on('jsdomError', e => { const m = String(e.message || e); if (!/Not implemented/i.test(m)) errors.push(m); });
  let html = inlineCatalog(fs.readFileSync(LIB, 'utf8'));
  let body = null;
  html = html.replace(/<script>([\s\S]*?)<\/script>/g, (m, b) => {
    if (!/location\.replace\(/.test(b)) return m;
    body = b;
    return '<script>/* app script stripped for capture */</script>';
  });
  const dom = new JSDOM(html, { url, runScripts: 'dangerously', pretendToBeVisual: true, virtualConsole: v });
  let nav = null;
  dom.window.__nav__ = u => { nav = u; };
  dom.window.eval(body.replace(/location\.replace\(/g, '__nav__('));
  return { dom, nav, errors };
}

console.log('\n[1] /library (no hash) — hub renders, single-file shelves are links');
{
  const { dom, errors } = load('http://127.0.0.1/library');
  const d = dom.window.document;

  is(errors.length === 0, 'no script errors on load', errors.join(' | '));

  /* picker: single-file categories are link cards straight to the file; portal cats are buttons */
  const links = [...d.querySelectorAll('#picker a.card')];
  const hrefs = links.map(a => a.getAttribute('href')).sort();
  is(links.length === 2, 'picker has exactly 2 direct-link cards (single-file shelves)', 'got ' + links.length);
  is(hrefs[0] === '/resources/medcore-question-bank' &&
     hrefs[1] === '/resources/standalone-htmls-case-ladder-interactive',
     'link cards point straight at Question Bank + Case Ladder', hrefs.join(', '));
  is(links.every(a => /↗$/.test(a.textContent)), 'link cards are marked ↗');
  is(links.every(a => /opens directly/i.test(a.textContent)), 'link cards say the file opens directly');

  const buttons = [...d.querySelectorAll('#picker button.card')];
  is(buttons.length === 5, 'picker keeps 5 portal button cards', 'got ' + buttons.length);
  is(buttons.every(b => b.dataset.cat), 'portal button cards carry data-cat');

  is(!d.getElementById('mocks-drills'), 'no #mocks-drills portal section is built');
  is(!d.getElementById('frameworks-interactive'), 'no #frameworks-interactive portal section');
  const portals = [...d.querySelectorAll('#portalHost .portal')].map(p => p.id).sort();
  is(portals.length === 5, '5 portals built', portals.join(', '));

  const portalItems = catItems().filter(it => !['mocks-drills', 'frameworks-interactive'].includes(
    it.c.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')));
  const opens = [...d.querySelectorAll('#portalHost a.btn.sm')].map(a => a.getAttribute('href'));
  is(opens.length === portalItems.length && opens.every(h => h.startsWith('/resources/')),
     'every portal card carries an Open link (' + portalItems.length + ' items)', 'count=' + opens.length);

  dom.window.close();
}

console.log('\n[2] /library#mocks-drills — old link bypasses the portal');
{
  const { dom, nav, errors } = loadPatched('http://127.0.0.1/library#mocks-drills');
  is(nav === '/resources/medcore-question-bank', 'route() redirects to the Question Bank', 'nav=' + nav);
  is(!dom.window.document.getElementById('mocks-drills'), 'no portal rendered for the dead hash');
  is(errors.length === 0, 'no script errors', errors.join(' | '));
  dom.window.close();
}

console.log('\n[3] /library#frameworks-interactive — same bypass');
{
  const { dom, nav } = loadPatched('http://127.0.0.1/library#frameworks-interactive');
  is(nav === '/resources/standalone-htmls-case-ladder-interactive', 'route() redirects to Case Ladder', 'nav=' + nav);
  is(!dom.window.document.getElementById('frameworks-interactive'), 'no portal rendered for the dead hash');
  dom.window.close();
}

console.log('\n[4] /library#core-books — real portals still route');
{
  const { dom } = load('http://127.0.0.1/library#core-books');
  const d = dom.window.document;
  const active = d.querySelector('.portal.active');
  is(active && active.id === 'core-books', '#core-books still opens its portal', active && active.id);
  const btn = [...d.querySelectorAll('#picker button.card')].find(b => b.dataset.cat === 'core-books');
  is(!!btn, 'Core Books still reachable from the picker');
  dom.window.close();
}

console.log('\n[5] /library#portals + empty hash — hub still the default');
for (const url of ['http://127.0.0.1/library#portals', 'http://127.0.0.1/library']) {
  const { dom } = load(url);
  const active = dom.window.document.querySelector('.portal.active');
  is(active && active.id === 'portals', 'hub is default for ' + (url.split('#')[1] || 'no hash'),
     active && active.id);
  dom.window.close();
}

console.log(fails ? `\n${fails} FAILURE(S)\n` : '\nALL GREEN\n');
process.exit(fails ? 1 : 0);
