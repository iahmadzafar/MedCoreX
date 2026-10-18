// The gate: intercepts every /resources/* request.
// Signed in  → the file is served from the static assets layer.
// Visitor    → bounced to the sign-in desk with a return path.
// Assigned routes in Pages Functions take precedence over static asset
// serving, so no resource file is reachable without a session cookie.
import { readCookie } from '../api/_util.js';

async function isSignedIn(request, env) {
  const token = readCookie(request);
  if (!token) return false;
  try {
    const row = await env.medlibx_db.prepare('SELECT expires_at FROM sessions WHERE token=?').bind(token).first();
    return !!(row && row.expires_at > Date.now());
  } catch { return false; }
}

const MIME = { '.html': 'text/html; charset=utf-8' };

export async function onRequestGet({ request, env }) {
  const ok = await isSignedIn(request, env);
  const url = new URL(request.url);
  const path = url.pathname;

  if (!ok) {
    if (request.headers.get('Accept') === 'application/json' || url.searchParams.get('fmt') === 'json') {
      return new Response(JSON.stringify({ ok: false, error: 'The file opens after signing in.' }), {
        status: 401,
        headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' }
      });
    }
    return new Response(null, {
      status: 302,
      headers: {
        'Location': '/login?next=' + encodeURIComponent(path),
        'Cache-Control': 'no-store, max-age=0'
      }
    });
  }

  // Resolve against the real asset, whatever its file extension.
  let asset = path.endsWith('/') ? path + 'index.html' : path;
  let res = await env.ASSETS.fetch(new URL(asset, url.origin));
  if (res.status === 404 && !path.endsWith('.html')) {
    res = await env.ASSETS.fetch(new URL(path + '.html', url.origin));
  }
  if (res.status === 404) {
    return new Response(null, { status: 302, headers: { 'Location': '/404' } });
  }

  // Serve privately: never cache a gated file outside the reader's session.
  const headers = new Headers(res.headers);
  headers.set('Cache-Control', 'private, max-age=0, must-revalidate');
  headers.set('X-Robots-Tag', 'noindex, nofollow');
  return new Response(res.body, { status: 200, headers });
}

export async function onRequestHead({ request, env }) {
  const res = await onRequestGet({ request, env });
  return new Response(null, { status: res.status, headers: res.headers });
}

export async function onRequestOptions() {
  return new Response(null, { status: 204 });
}
