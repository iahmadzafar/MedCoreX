#!/usr/bin/env node
/* MedCORE Hub — local end-to-end proof.
   Boots a static server that emulates Cloudflare Pages routing
   (extensionless → file.html, miss → 404.html with status 404),
   then verifies by CONTENT, not status codes:
     1. every hub item resolves to the exact file bytes
     2. every internal link/src in every page resolves to a real file
     3. question banks: counts, sequential numbering, unique ids
   Run: node prooflocal.js      exit 0 = proven locally */
const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const SITE = __dirname;
const RES = path.join(SITE, 'resources');
let failures = 0;
const fail = m => { failures++; console.log('  ✗ ' + m); };
const ok = m => console.log('  ✓ ' + m);
const sha = b => crypto.createHash('sha256').update(b).digest('hex');

// ── Pages-like static server ──
const MIME = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.json': 'application/json' };
const server = http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  if (p.endsWith('/')) p += 'index.html';
  let file = path.join(SITE, p);
  if (!path.extname(p) && fs.existsSync(file + '.html')) { file += '.html'; }        // Pages extensionless
  if (fs.existsSync(file) && fs.statSync(file).isFile()) {
    res.writeHead(200, { 'content-type': MIME[path.extname(file)] || 'application/octet-stream', 'cache-control': 'public, max-age=0, must-revalidate' });
    return res.end(fs.readFileSync(file));
  }
  res.writeHead(404, { 'content-type': 'text/html; charset=utf-8' });                // honest miss
  res.end(fs.existsSync(path.join(SITE, '404.html')) ? fs.readFileSync(path.join(SITE, '404.html')) : 'not found');
});

const get = (port, url) => new Promise((resolve, reject) => {
  http.get({ host: '127.0.0.1', port, path: url }, r => {
    const chunks = [];
    r.on('data', c => chunks.push(c));
    r.on('end', () => resolve({ status: r.statusCode, body: Buffer.concat(chunks) }));
  }).on('error', reject);
});

(async () => {
  await new Promise(r => server.listen(0, '127.0.0.1', r));
  const port = server.address().port;
  console.log('\nlocal proof server: http://127.0.0.1:' + port + ' (Pages-emulating)\n');

  // ── 1. hub items by CONTENT hash ──
  console.log('[1] every hub item: URL → exact file bytes');
  const hub = fs.readFileSync(path.join(SITE, 'index.html'), 'utf8');
  const bs = hub.indexOf('{', hub.indexOf('var DATA = {'));
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
  let itemPass = 0, itemBytes = 0;
  for (const it of DATA.items) {
    const { status, body } = await get(port, '/resources/' + it.f.replace(/\.html$/i, ''));
    const disk = fs.readFileSync(path.join(RES, it.f));
    if (status !== 200) { fail(it.f + ' → HTTP ' + status); continue; }
    if (sha(body) !== sha(disk)) { fail(it.f + ' → bytes differ from disk'); continue; }
    itemPass++; itemBytes += disk.length;
  }
  if (itemPass === DATA.items.length) ok(DATA.items.length + ' / ' + DATA.items.length + ' items byte-identical over HTTP (' + (itemBytes / 1048576).toFixed(1) + ' MB served)');

  // ── 2. internal link integrity across every page ──
  console.log('\n[2] internal link/src integrity in every page');
  const files = fs.readdirSync(RES).filter(f => f.endsWith('.html'));
  const known = new Set(files);
  let linkCount = 0; const broken = [];
  for (const f of files) {
    const h = fs.readFileSync(path.join(RES, f), 'utf8');
    for (const m of h.matchAll(/(?:href|src)="([^"#?]+)(?:[?#][^"]*)?"/g)) {
      const u = m[1];
      if (/^(https?:|mailto:|data:|javascript:|\/\/)/i.test(u)) continue;
      if (u.startsWith('#') || /['`$]/.test(u)) continue;   // skip JS-built URLs (any quote/template char)
      linkCount++;
      let base;
      if (u.startsWith('/')) base = path.join(SITE, u);
      else base = path.join(RES, u);
      const candidates = [base, base + '.html', path.join(base, 'index.html')];
      if (!candidates.some(c => fs.existsSync(c))) broken.push(f + ' → ' + u);
    }
  }
  // hub page too
  for (const m of hub.matchAll(/href="([^"#?]+)"/g)) {
    const u = m[1];
    if (/^(https?:|mailto:|data:|javascript:|\/\/|#)/i.test(u)) continue;
    if (/['`$]/.test(u)) continue;   // skip JS-built URLs
    linkCount++;
    const c = [path.join(SITE, u), path.join(SITE, u) + '.html'];
    if (!c.some(x => fs.existsSync(x))) broken.push('index.html → ' + u);
  }
  if (broken.length) broken.slice(0, 12).forEach(b => fail('dead link: ' + b));
  else ok(linkCount + ' internal links checked, 0 dead targets');

  // ── 3. question-bank integrity ──
  console.log('\n[3] question banks: counts, numbering, ids');
  const expect = { 'medcore-question-bank.html': 2932 };
  for (const [f, want] of Object.entries(expect)) {
    const { status, body } = await get(port, '/resources/' + f);
    if (status !== 200) { fail(f + ' → HTTP ' + status); continue; }
    const h = body.toString('utf8');
    const dl = h.split('\n').find(l => l.includes('const DATA') && l.includes('JSON.parse('));
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
    let n = 0, badN = 0; const ids = new Set(); let dupe = 0;
    for (const v of Object.values(D)) {
      const qs = v.questions || [];
      n += qs.length;
      qs.forEach((q, i) => { if (q.n !== i + 1) badN++; if (q.id) { if (ids.has(q.id)) dupe++; ids.add(q.id); } });
    }
    if (n !== want) fail(f + ': ' + n + ' questions, expected ' + want);
    else if (badN || dupe) fail(f + ': ' + badN + ' numbering, ' + dupe + ' duplicate ids');
    else ok(f + ': ' + n.toLocaleString() + ' Qs over HTTP · sequential · ' + ids.size + ' unique ids');
  }

  // ── 4. 404 honesty ──
  console.log('\n[4] miss handling');
  const miss = await get(port, '/resources/definitely-not-a-file');
  if (miss.status === 404 && miss.body.toString('utf8').includes('404')) ok('miss → HTTP 404 + branded 404.html (no home-page decoy)');
  else fail('miss → HTTP ' + miss.status + ' (expected 404)');

  server.close();
  console.log('\n' + (failures ? '✗ ' + failures + ' FAILURE(S)' : '✓ PROVEN LOCALLY — ' + DATA.items.length + ' items, ' + linkCount + ' links, ' + Object.values(expect).reduce((a, b) => a + b, 0).toLocaleString() + ' bank questions all verified by content') + '\n');
  process.exit(failures ? 1 : 0);
})();
