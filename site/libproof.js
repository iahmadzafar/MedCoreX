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

/* plain load — inline script runs as written */
function load(url) {
  const errors = [];
  const v = new VirtualConsole();
  v.on('jsdomError', e => { const m = String(e.message || e); if (!/Not implemented/i.test(m)) errors.push(m); });
  const dom = new JSDOM(fs.readFileSync(LIB, 'utf8'), {
    url, runScripts: 'dangerously', pretendToBeVisual: true, virtualConsole: v,
  });
  return { dom, errors };
}

/* patched load — location.replace() captured instead of navigating, so the target is observable */
function loadPatched(url) {
  const errors = [];
  const v = new VirtualConsole();
  v.on('jsdomError', e => { const m = String(e.message || e); if (!/Not implemented/i.test(m)) errors.push(m); });
  let html = fs.readFileSync(LIB, 'utf8');
  let body = null;
  html = html.replace(/<script>([\s\S]*?)<\/script>/g, (m, b) => {
    if (!/const CATS=/.test(b)) return m;
    body = b;
    return '<script>/* catalogue script stripped for capture */</script>';
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

  const anchors = [...d.querySelectorAll('#catbar a.chip')];
  const hrefs = anchors.map(a => a.getAttribute('href')).sort();
  is(anchors.length === 2, 'catbar has exactly 2 direct-link chips', 'got ' + anchors.length);
  is(hrefs[0] === '/resources/medcore-question-bank' &&
     hrefs[1] === '/resources/standalone-htmls-case-ladder-interactive',
     'chips point straight at Question Bank + Case Ladder', hrefs.join(', '));
  is(anchors.every(a => /↗$/.test(a.textContent)), 'direct chips are marked ↗');

  const buttons = [...d.querySelectorAll('#catbar button.chip')];
  is(buttons.length === 6, 'catbar keeps 6 portal buttons (home + 5 shelves)', 'got ' + buttons.length);
  is(d.getElementById('catbar').getAttribute('role') === 'group', 'catbar role=group (links allowed)');

  is(!d.getElementById('mocks-drills'), 'no #mocks-drills portal section is built');
  is(!d.getElementById('frameworks-interactive'), 'no #frameworks-interactive portal section');
  const portals = [...d.querySelectorAll('#portalHost .portal')].map(p => p.id).sort();
  is(portals.length === 5, '5 portals built', portals.join(', '));

  const pickerA = [...d.querySelectorAll('#picker a.card')];
  const pickerB = [...d.querySelectorAll('#picker button.card')];
  is(pickerA.length === 2 && pickerB.length === 5, 'picker: 2 link cards + 5 button cards',
     `links=${pickerA.length} buttons=${pickerB.length}`);
  is(pickerA.every(a => a.getAttribute('href').startsWith('/resources/')), 'picker link cards carry real hrefs');
  is(pickerA.every(a => /opens directly/.test(a.textContent)), 'picker link cards say the file opens directly');

  const opens = [...d.querySelectorAll('#portalHost a.btn.sm')].map(a => a.getAttribute('href'));
  is(opens.length === 35 && opens.every(h => h.startsWith('/resources/')),
     'all 35 portal cards still carry Open links', 'count=' + opens.length);

  /* the anchor chips must not be hijacked by the chip click handler */
  anchors[0].addEventListener('click', e => e.preventDefault());
  anchors[0].click();
  is(dom.window.location.hash === '', 'clicking a direct chip does not set a stray hash',
     'hash=' + dom.window.location.hash);

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
  const pressed = [...d.querySelectorAll('#catbar button.chip[aria-pressed=true]')].map(c => c.textContent);
  is(pressed.length === 1 && pressed[0] === 'Core Books', 'chip pressed state still works', pressed.join(','));
  is([...d.querySelectorAll('#catbar a.chip')].every(a => !a.hasAttribute('aria-pressed')),
     'no aria-pressed leaked onto the link chips');
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
