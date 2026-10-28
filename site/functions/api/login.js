import { json, bad, options, cors, hashPassword, createSession, setSessionCookie, getUser } from './_util.js';

export const onRequestOptions = () => options();

// ── brute-force throttle ─────────────────────────────────────────────
// Per (email + IP): failed attempts accumulate; the permitted retry gap
// doubles with every failure, capped at one hour. Success clears the debt.
const BASE_FAILS = 5;

function failKey(request, email) {
  const ip = request.headers.get('cf-connecting-ip') || 'unknown';
  return (email || 'anon') + '|' + ip;
}

async function hole(env, key) {
  const row = await env.medcore_db.prepare('SELECT fails, last FROM auth_fails WHERE key=?').bind(key).first();
  if (!row) return { fails: 0, last: 0 };
  // stale debts (last fail older than the max gap) forgiven on read
  if (row.last < Date.now() - 3600 * 1000) return { fails: 0, last: row.last };
  return { fails: row.fails || 0, last: row.last || 0 };
}

async function recordFail(env, key, fails) {
  const now = Date.now();
  await env.medcore_db.prepare(
    'INSERT INTO auth_fails (key,fails,last) VALUES (?,?,?) ON CONFLICT(key) DO UPDATE SET fails=excluded.fails, last=excluded.last'
  ).bind(key, fails, now).run();
}

async function clearFail(env, key) {
  await env.medcore_db.prepare('DELETE FROM auth_fails WHERE key=?').bind(key).run();
}

export async function onRequestPost({ request, env }) {
  let body;
  try { body = await request.json(); } catch { return bad('invalid JSON'); }
  const email = (body.email || '').trim().toLowerCase();
  const password = body.password || '';
  const key = failKey(request, email);

  if (!email || !password) return bad('Email and password are required.');

  const cur = await hole(env, key);
  if (cur.fails >= BASE_FAILS) {
    const gap = Math.min(3600, Math.pow(2, cur.fails - BASE_FAILS) * 4) * 1000;
    const wait = cur.last + gap - Date.now();
    if (wait > 0) {
      const secs = Math.ceil(wait / 1000);
      return json({ error: 'Too many attempts. Try again in ' + (secs > 90 ? Math.ceil(secs / 60) + ' minutes' : secs + ' seconds') + '.' },
        429, { 'retry-after': String(secs), ...cors() });
    }
  }

  const t0 = Date.now();
  const u = await env.medcore_db.prepare('SELECT id,email,username,pass_hash,salt FROM users WHERE email=?').bind(email).first();
  let h = null;
  if (u) h = await hashPassword(password, u.salt);
  const ok = !!u && !!h && h === u.pass_hash;

  if (!ok) {
    await recordFail(env, key, cur.fails + 1);
    return bad('Incorrect email or password.', 401);
  }

  await clearFail(env, key);
  const token = await createSession(env, u.id);
  // housekeeping: sweep dead sessions so the table doesn't grow forever
  await env.medcore_db.prepare('DELETE FROM sessions WHERE expires_at < ?').bind(Date.now()).run();
  return json({ ok: true, user: { id: u.id, email: u.email, username: u.username } }, 200, { 'Set-Cookie': setSessionCookie(token), ...cors() });
}

// GET /api/login is invalid — that's what /api/me is for.
export async function onRequestGet({ request, env }) {
  const u = await getUser(request, env);
  if (u) return json({ ok: true, user: u }, 200, cors());
  return bad('Sign in from the library desk (POST /api/login).', 405);
}
