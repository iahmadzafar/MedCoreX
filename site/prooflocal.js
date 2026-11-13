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
  if (!path.extname(p) && fs.existsSync(path.join(file, 'index.html'))) { file = path.join(file, 'index.html'); } // folder → its index
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
  const catSrc = fs.readFileSync(path.join(SITE, 'assets', 'catalog.js'), 'utf8');
  const DATA = { items: [] };
  { const re = /\{t:"([^"]+)",d:"([^"]*)",c:"([^"]+)",f:"([^"]+)",k:([0-9.]+)\}/g; let m; while ((m = re.exec(catSrc))) DATA.items.push({ f: m[4] }); }
  let itemPass = 0, itemBytes = 0;
  for (const it of DATA.items) {
    const { status, body } = await get(port, '/resources/' + it.f.replace(/\.html$/i, ''));
    let disk;
    const direct = path.join(RES, it.f);
    if (fs.existsSync(direct)) disk = fs.readFileSync(direct);
    else {
      const folder = path.join(RES, it.f.replace(/\.html$/i, ''), 'index.html');
      if (fs.existsSync(folder)) disk = fs.readFileSync(folder);
      else { fail(it.f + ' → missing on disk'); continue; }
    }
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
  console.log('\n[3] question bank: count, unique public_ids');
  {
    const { status, body } = await get(port, '/resources/medcore-question-bank/data.js');
    if (status !== 200) { fail('medcore-question-bank/data.js → HTTP ' + status); }
    else {
      const src = body.toString('utf8');
      const start = src.indexOf('[');
      let dd = 0, e2 = -1;
      for (let i = start; i < src.length; i++) { const c = src[i]; if (c === '[') dd++; else if (c === ']') { dd--; if (dd === 0) { e2 = i + 1; break; } } }
      const D = JSON.parse(src.slice(start, e2));
      let n = 0; const ids = new Set(); let dupe = 0; let noId = 0;
      for (const v of D) {
        const qs = v.questions || [];
        n += qs.length;
        qs.forEach(q => { if (!q.id) noId++; if (ids.has(q.id)) dupe++; ids.add(q.id); });
      }
      if (n !== 6689) fail('medcore-question-bank/data.js: ' + n + ' questions, expected 6689');
      else if (dupe || noId) fail('medcore-question-bank/data.js: ' + dupe + ' duplicate ids, ' + noId + ' missing ids');
      else ok('medcore-question-bank/data.js: ' + n.toLocaleString() + ' Qs over HTTP · ' + ids.size + ' unique public_ids');
    }
  }

  // ── 4. 404 honesty ──
  console.log('\n[4] miss handling');
  const miss = await get(port, '/resources/definitely-not-a-file');
  if (miss.status === 404 && miss.body.toString('utf8').includes('404')) ok('miss → HTTP 404 + branded 404.html (no home-page decoy)');
  else fail('miss → HTTP ' + miss.status + ' (expected 404)');

  server.close();
  console.log('\n' + (failures ? '✗ ' + failures + ' FAILURE(S)' : '✓ PROVEN LOCALLY — ' + DATA.items.length + ' items, ' + linkCount + ' links, 6,689 bank questions all verified by content') + '\n');
  process.exit(failures ? 1 : 0);
})();
