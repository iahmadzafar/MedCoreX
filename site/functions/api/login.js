import { json, bad, options, cors, hashPassword, createSession, setSessionCookie, getUser } from './_util.js';

export const onRequestOptions = () => options();

export async function onRequestPost({ request, env }) {
  let body;
  try { body = await request.json(); } catch { return bad('invalid JSON'); }
  const email = (body.email || '').trim().toLowerCase();
  const password = body.password || '';
  if (!email || !password) return bad('Email and password are required.');

  const u = await env.medlibx_db.prepare('SELECT id,email,username,pass_hash,salt FROM users WHERE email=?').bind(email).first();
  if (!u) return bad('Incorrect email or password.', 401);
  const h = await hashPassword(password, u.salt);
  if (h !== u.pass_hash) return bad('Incorrect email or password.', 401);

  const token = await createSession(env, u.id);
  // housekeeping: sweep dead sessions so the table doesn't grow forever
  await env.medlibx_db.prepare('DELETE FROM sessions WHERE expires_at < ?').bind(Date.now()).run();
  return json({ ok: true, user: { id: u.id, email: u.email, username: u.username } }, 200, { 'Set-Cookie': setSessionCookie(token), ...cors() });
}

// GET /api/login is invalid — that's what /api/me is for.
export async function onRequestGet({ request, env }) {
  const u = await getUser(request, env);
  if (u) return json({ ok: true, user: u }, 200, cors());
  return bad('Sign in from the library desk (POST /api/login).', 405);
}
