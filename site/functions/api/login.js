import { json, bad, options, cors, hashPassword, createSession, setSessionCookie } from './_util.js';

export const onRequestOptions = () => options();

export async function onRequestPost({ request, env }) {
  let body;
  try { body = await request.json(); } catch { return bad('invalid json'); }
  const email = (body.email || '').trim().toLowerCase();
  const password = body.password || '';
  if (!email || !password) return bad('Email and password are required.');

  const u = await env.medcore_db.prepare('SELECT id,email,pass_hash,salt FROM users WHERE email=?').bind(email).first();
  if (!u) return bad('Incorrect email or password.', 401);
  const h = await hashPassword(password, u.salt);
  if (h !== u.pass_hash) return bad('Incorrect email or password.', 401);

  const token = await createSession(env, u.id);
  return json({ ok: true, user: { id: u.id, email: u.email } }, 200, { 'Set-Cookie': setSessionCookie(token), ...cors() });
}
