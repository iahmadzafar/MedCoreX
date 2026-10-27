#!/usr/bin/env node
/* Dev server that emulates Cloudflare Pages routing locally.
   Usage: node serve.js [port]     default 8123
   - extensionless URL → file.html
   - misses → 404.html with status 404
   Dev-only; excluded from deploys. */
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = Number(process.argv[2] || 8123);
const SITE = __dirname;
const MIME = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json', '.css': 'text/css', '.svg': 'image/svg+xml',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.ico': 'image/x-icon',
};

http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  if (p.endsWith('/')) p += 'index.html';
  let file = path.join(SITE, p);
  if (!path.extname(p) && fs.existsSync(file + '.html')) file += '.html';
  if (fs.existsSync(file) && fs.statSync(file).isFile()) {
    res.writeHead(200, {
      'content-type': MIME[path.extname(file).toLowerCase()] || 'application/octet-stream',
      'cache-control': 'public, max-age=0, must-revalidate',
    });
    return res.end(fs.readFileSync(file));
  }
  const four = path.join(SITE, '404.html');
  res.writeHead(404, { 'content-type': 'text/html; charset=utf-8' });
  res.end(fs.existsSync(four) ? fs.readFileSync(four) : 'Not found');
}).listen(PORT, '127.0.0.1', () => {
  console.log('MedCORE Hub (Pages-emulating) → http://localhost:' + PORT);
});
