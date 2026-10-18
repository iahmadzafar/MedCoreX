#!/usr/bin/env bash
# Local check harness for MedLib X — page + catalog behaviour with the
# /resources gate behaving exactly like production (302 to /login without a
# session cookie). API endpoints are Cloudflare-Functions only, so auth flows
# need a deployed build; everything else verifies right here.
# Usage: ./SERVE.sh [port]     (default 8462)
set -euo pipefail
SITE="$(cd "$(dirname "$0")" && pwd)/site"
PORT="${1:-8462}"
exec python3 - "$SITE" "$PORT" <<'PYEOF'
import http.server, os, sys, urllib.parse, mimetypes

BASE = os.path.abspath(sys.argv[1])
PORT = int(sys.argv[2])

class H(http.server.BaseHTTPRequestHandler):
    def do_GET(self):
        p = urllib.parse.unquote(urllib.parse.urlsplit(self.path).path)
        # the gate — mirrors functions/resources/[[file]].js
        # MLX_INSECURE=1 (local preview only) lets signed-out visits through so
        # the browser panel can render gated pages without the real API.
        if os.environ.get('MLX_INSECURE') == '1':
            pass
        elif p.startswith('/resources/'):
            if 'medlibx_session=' not in (self.headers.get('Cookie') or ''):
                loc = '/login?next=' + urllib.parse.quote(p)
                sys.stderr.write(f'[gate] {p} -> 302 {loc}\n')
                self.send_response(302)
                self.send_header('Location', loc)
                self.send_header('Content-Length', '0')
                self.send_header('Cache-Control', 'no-store')
                self.end_headers()
                return
        # resolve file (pretty routes: /login -> login.html)
        real = os.path.join(BASE, p.lstrip('/'))
        if p == '/' or (os.path.isdir(real) and p.endswith('/')):
            real = os.path.join(real.rstrip('/') or BASE, 'index.html')
        elif not os.path.isfile(real):
            real = real + '.html'
        if not os.path.isfile(real):
            real = os.path.join(BASE, '404.html')
            code = 404
        else:
            code = 200
        ctype = mimetypes.guess_type(real)[0] or 'application/octet-stream'
        ctype = ctype + ('; charset=utf-8' if ctype.startswith('text/html') else '')
        with open(real, 'rb') as f:
            data = f.read()
        self.send_response(code)
        self.send_header('Content-Type', ctype)
        self.send_header('Content-Length', str(len(data)))
        self.send_header('Cache-Control', 'no-store')
        self.end_headers()
        self.wfile.write(data)

    def do_HEAD(self): self.do_GET()
    def log_message(self, fmt, *args):
        sys.stderr.write('[http] ' + (fmt % args) + '\n')

print(f'MedLib X local check — http://127.0.0.1:{PORT}', file=sys.stderr)
http.server.ThreadingHTTPServer(('127.0.0.1', PORT), H).serve_forever()
PYEOF
