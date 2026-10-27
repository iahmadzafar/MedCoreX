#!/usr/bin/env node
/* Live check — run AFTER a deploy against the real host.
   Usage: node prodcheck.js https://<your-pages-domain>
   Proves what local emulation cannot: real routing, redirects, headers, 404 handling. */
const https = require('https');

const BASE = (process.argv[2] || '').replace(/\/$/, '');
if (!BASE) { console.log('usage: node prodcheck.js https://host'); process.exit(2); }

let fails = 0;
const ok = m => console.log('  ✓ ' + m);
const bad = m => { fails++; console.log('  ✗ ' + m); };

const get = (url, redirects = 0) => new Promise(resolve => {
  https.get(url, { headers: { 'accept-encoding': 'identity' } }, r => {
    if ([301, 302, 307, 308].includes(r.statusCode) && r.headers.location && redirects < 5) {
      r.resume();
      return resolve(get(new URL(r.headers.location, url).href, redirects + 1));
    }
    const chunks = [];
    r.on('data', c => chunks.push(c));
    r.on('end', () => resolve({ status: r.statusCode, headers: r.headers, body: Buffer.concat(chunks).toString('utf8') }));
  }).on('error', e => resolve({ status: 0, headers: {}, body: '', err: e.message }));
});

(async () => {
  console.log('\nlive check → ' + BASE + '\n');

  const hub = await get(BASE + '/');
  if (hub.status === 200 && /MedCORE Hub/.test(hub.body)) ok('hub loads (200, branded)');
  else bad('hub: HTTP ' + hub.status);
  if (/id="rgrid"/.test(hub.body) && /medcore\.theme/.test(hub.body)) ok('hub carries the interactive library + shared theme key');
  else bad('hub is missing the library grid or theme key');

  const bank = await get(BASE + '/resources/medcore-question-bank');
  if (bank.status === 200 && /Medicine & Allied/.test(bank.body) && /shuffleInPlace/.test(bank.body) && bank.body.length > 4e6)
    ok('bank loads extensionless (200, ' + (bank.body.length / 1048576).toFixed(1) + ' MB, shuffle present)');
  else bad('bank: HTTP ' + bank.status + ', ' + bank.body.length + ' bytes');

  const miss = await get(BASE + '/resources/definitely-not-a-file');
  if (miss.status === 404) ok('unknown path → real 404 (no home-page decoy)');
  else bad('unknown path → HTTP ' + miss.status + ' (fallback setting still on?)');

  const legacy = await get(BASE + '/resources/test-series-html-nre-test-series-2026-by-subject');
  if (legacy.status === 200 && /Medicine & Allied/.test(legacy.body)) ok('legacy link redirects into the merged bank');
  else bad('legacy redirect: HTTP ' + legacy.status);

  if (String(hub.headers['x-content-type-options'] || '') === 'nosniff') ok('security headers active (_headers served)');
  else bad('x-content-type-options missing — _headers not applied');

  console.log('\n' + (fails ? '✗ ' + fails + ' live failure(s)' : '✓ LIVE OK — routing, redirects, headers, 404 all correct') + '\n');
  process.exit(fails ? 1 : 0);
})();
