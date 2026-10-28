// GET /api/google/callback?code=…&state=… → exchange code, sign the user in, redirect back.
import { newId, createSession, setSessionCookie, readCookie } from '../_util.js';


// failures land back on /login with a reason code the page explains (no bare-text dead ends)
function fail(code) {
  const h = new Headers();
  h.set('Location', '/login?e=' + code);   /* failures always land where the message is shown */
  return new Response(null, { status: 302, headers: h });
}

export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');
  const state = url.searchParams.get('state');
  const savedState = readCookie(request, 'g_state');
  const ret = readCookie(request, 'g_return') || '/';

  if (!env.GOOGLE_CLIENT_ID || !env.GOOGLE_CLIENT_SECRET) {
    return fail('google-config');
  }
  if (!code || !state || !savedState || state !== savedState) {
    return fail('google-state');
  }

  // Exchange the authorization code for tokens (server-to-server, over TLS).
  const body = new URLSearchParams({
    code, client_id: env.GOOGLE_CLIENT_ID, client_secret: env.GOOGLE_CLIENT_SECRET,
    redirect_uri: url.origin + '/api/google/callback', grant_type: 'authorization_code'
  });
  const tokRes = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST', headers: { 'content-type': 'application/x-www-form-urlencoded' }, body
  });
  const tok = await tokRes.json().catch(function () { return {}; });
  if (!tok.id_token) return fail('google-exchange');

  // Decode the ID token payload. It came straight from Google's token endpoint over TLS,
  // so we trust the channel; we still validate audience, issuer and expiry.
  let p;
  try {
    const part = tok.id_token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
    p = JSON.parse(decodeURIComponent(escape(atob(part))));
  } catch (e) { return fail('google-token'); }

  const okIss = p.iss === 'accounts.google.com' || p.iss === 'https://accounts.google.com';
  const okAud = p.aud === env.GOOGLE_CLIENT_ID;
  const okExp = !p.exp || p.exp * 1000 > Date.now();
  const email = (p.email || '').toLowerCase();
  if (!okIss || !okAud || !okExp || !email) return fail('google-token');
  if (p.email_verified === false) return fail('google-email');

  // Find or create the account (Google users have no password).
  // Same D1 binding (medlibx_db) as register/login/_util so Google users live in
  // the same users table as email/password accounts and can sign in either way.
  let u = await env.medlibx_db.prepare('SELECT id,email FROM users WHERE email=?').bind(email).first();
  if (!u) {
    const id = newId();
    await env.medlibx_db.prepare('INSERT INTO users (id,email,pass_hash,salt,created_at) VALUES (?,?,?,?,?)')
      .bind(id, email, 'google-oauth', 'google', Date.now()).run();
    u = { id, email };
  }

  const token = await createSession(env, u.id);
  const h = new Headers();
  h.set('Location', (ret && ret.charAt(0) === '/' ? ret : '/') + (ret.indexOf('?') >= 0 ? '&' : '?') + 'signed_in=1');
  h.append('Set-Cookie', setSessionCookie(token));
  h.append('Set-Cookie', 'g_state=; Path=/; Max-Age=0');
  h.append('Set-Cookie', 'g_return=; Path=/; Max-Age=0');
  return new Response(null, { status: 302, headers: h });
}
