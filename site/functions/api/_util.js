// Shared helpers for the MedCORE API (Cloudflare Pages Functions + D1).

export function json(data, status = 200, headers = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store', ...headers }
  });
}
export function bad(msg, status = 400) { return json({ error: msg }, status); }
export function cors(extra = {}) {
  return {
    'access-control-allow-origin': '*',
    'access-control-allow-headers': 'content-type',
    'access-control-allow-methods': 'GET,POST,PUT,OPTIONS',
    'access-control-allow-credentials': 'true',
    ...extra
  };
}
export function options() { return new Response(null, { status: 204, headers: cors() }); }

const enc = new TextEncoder();

export async function hashPassword(password, salt) {
  const key = await crypto.subtle.importKey('raw', enc.encode(password), 'PBKDF2', false, ['deriveBits']);
  const bits = await crypto.subtle.deriveBits(
    { name: 'PBKDF2', salt: enc.encode(salt), iterations: 100000, hash: 'SHA-256' }, key, 256);
  return btoa(String.fromCharCode(...new Uint8Array(bits)));
}

export function newId() { return crypto.randomUUID(); }
export function newToken() {
  const b = crypto.getRandomValues(new Uint8Array(32));
  return btoa(String.fromCharCode(...b)).replace(/[+/=]/g, '');
}
export function validEmail(e) { return typeof e === 'string' && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(e); }

const COOKIE = 'medcore_session';
const MAX_AGE = 30 * 24 * 3600; // 30 days

export function setSessionCookie(token) {
  return `${COOKIE}=${token}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${MAX_AGE}`;
}
export function clearSessionCookie() {
  return `${COOKIE}=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0`;
}
export function readCookie(request, name = COOKIE) {
  const c = request.headers.get('Cookie') || '';
  const m = c.match(new RegExp('(?:^|; )' + name + '=([^;]+)'));
  return m ? decodeURIComponent(m[1]) : null;
}

export async function getUser(request, env) {
  const token = readCookie(request);
  if (!token) return null;
  const row = await env.medcore_db.prepare('SELECT user_id, expires_at FROM sessions WHERE token=?').bind(token).first();
  if (!row || row.expires_at < Date.now()) return null;
  const u = await env.medcore_db.prepare('SELECT id, email FROM users WHERE id=?').bind(row.user_id).first();
  return u || null;
}

export async function createSession(env, userId) {
  const token = newToken(), now = Date.now(), exp = now + MAX_AGE * 1000;
  await env.medcore_db.prepare('INSERT INTO sessions (token,user_id,created_at,expires_at) VALUES (?,?,?,?)')
    .bind(token, userId, now, exp).run();
  return token;
}
