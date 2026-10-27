#!/usr/bin/env node
/* MedCORE Hub — repository verification harness.
   Run: node verify.js     (exit 0 = all green, exit 1 = regressions found) */
const fs = require('fs');
const path = require('path');

const SITE = __dirname;
const ROOT = path.join(__dirname, '..');
const RES = path.join(SITE, 'resources');
let failures = 0;
const fail = (m) => { failures++; console.log('  ✗ ' + m); };
const ok = (m) => console.log('  ✓ ' + m);

console.log('\n[1] hub <-> catalog <-> disk');
const hub = fs.readFileSync(path.join(SITE, 'index.html'), 'utf8');
const m = hub.indexOf('var DATA = {');
const bs = hub.indexOf('{', m);
let d = 0, is = false, es = false, end = -1;
for (let i = bs; i < hub.length; i++) {
  const c = hub[i];
  if (es) { es = false; continue; }
  if (c === '\\') { es = true; continue; }
  if (c === '"') { is = !is; continue; }
  if (is) continue;
  if (c === '{') d++;
  if (c === '}') { d--; if (d === 0) { end = i + 1; break; } }
}
const DATA = JSON.parse(hub.slice(bs, end));
const catPath = path.join(ROOT, 'hub-data', 'catalog.json');
const cat = fs.existsSync(catPath) ? JSON.parse(fs.readFileSync(catPath, 'utf8')) : null;
const disk = new Set(fs.readdirSync(RES).filter(f => f.endsWith('.html')));

for (const it of DATA.items) if (!disk.has(it.f)) fail('hub links missing file: ' + it.f);
if (DATA.items.every(it => disk.has(it.f))) ok('all ' + DATA.items.length + ' hub items exist on disk');

if (!cat) { ok('catalog.json not present (scratch dir) — embedded DATA is the source of truth'); }
else {
  const catMap = new Map(cat.items.map(i => [i.f, i]));
  const drift = DATA.items.filter(it => { const c = catMap.get(it.f); return !c || c.t !== it.t || c.c !== it.c; });
  if (drift.length) fail('hub/catalog drift: ' + drift.map(i => i.f).join(', '));
  else ok('hub embedded catalog matches hub-data/catalog.json');
}

// support assets intentionally not listed in the hub (iframed by the combined quick-reference viewer)
const SUPPORT = new Set(['standalone-htmls-medical-quick-reference-dark.html', 'standalone-htmls-medical-quick-reference-light.html']);
const orphans = [...disk].filter(f => f !== '404.html' && !SUPPORT.has(f) && !DATA.items.some(i => i.f === f));
if (orphans.length) console.log('  ! on disk but unlisted in hub (' + orphans.length + '): ' + orphans.join(', '));
else ok('no orphan resources');

console.log('\n[2] HTML structure & scripts');
const pages = fs.readdirSync(RES).filter(x => x.endsWith('.html')).map(f => [f, path.join(RES, f)]);
pages.push(['404.html', path.join(SITE, '404.html')]);
for (const [f, filePath] of pages) {
  const h = fs.readFileSync(filePath, 'utf8');
  if (!/^<!DOCTYPE html>/i.test(h.trim())) fail(f + ': missing doctype');
  if (!/<\/html>\s*$/i.test(h)) fail(f + ': truncated (no </html>)');
  if (!/<meta name=["']viewport["'][^>]*width=device-width/.test(h)) fail(f + ': no viewport');
  const styles = [...h.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)];
  if ((h.match(/<style/g) || []).length !== (h.match(/<\/style>/g) || []).length) fail(f + ': unbalanced <style>');
  for (const s of styles) if ((s[1].match(/\{/g) || []).length !== (s[1].match(/\}/g) || []).length) fail(f + ': unbalanced braces in CSS');
  for (const s of h.matchAll(/<script(?![^>]*application\/json)[^>]*>([\s\S]*?)<\/script>/g)) {
    try { new Function(s[1]); } catch (e) { fail(f + ': JS syntax — ' + e.message.slice(0, 60)); }
  }
}
if (!failures) ok('all pages: doctype, viewport, balanced CSS, valid inline JS');

console.log('\n[3] question-data integrity');
let totalQ = 0;
for (const f of fs.readdirSync(RES).filter(x => x.endsWith('.html'))) {
  const h = fs.readFileSync(path.join(RES, f), 'utf8');
  const dl = h.split('\n').find(l => l.includes('const DATA') && l.includes('JSON.parse('));
  if (!dl) continue;
  try {
    const o = dl.indexOf('JSON.parse(') + 'JSON.parse'.length;
    let dd = 0, ins = false, esc = false, e2 = -1;
    for (let i = o; i < dl.length; i++) {
      const c = dl[i];
      if (esc) { esc = false; continue; }
      if (c === '\\') { esc = true; continue; }
      if (c === '"') { ins = !ins; continue; }
      if (ins) continue;
      if (c === '(') dd++;
      if (c === ')') { dd--; if (dd === 0) { e2 = i + 1; break; } }
    }
    const D = new Function('return ' + dl.substring(dl.indexOf('const DATA=') + 11, e2))();
    let n = 0, bad = 0; const ids = new Set();
    for (const v of Object.values(D)) {
      const qs = v.questions || v.q || null;
      if (!Array.isArray(qs)) continue;
      n += qs.length;
      qs.forEach((q, i) => {
        if (q.n !== undefined && q.n !== i + 1) bad++;
        if (q.id) { if (ids.has(q.id)) bad++; ids.add(q.id); }
      });
    }
    totalQ += n;
    if (bad) fail(f + ': ' + bad + ' numbering/id defects');
  } catch (e) { fail(f + ': DATA parse — ' + e.message.slice(0, 50)); }
}
ok('question banks parsed, sequential numbering, unique ids — ' + totalQ.toLocaleString() + ' questions total');

console.log('\n' + (failures ? '✗ ' + failures + ' failure(s)' : '✓ ALL CHECKS PASSED') + '\n');
process.exit(failures ? 1 : 0);
