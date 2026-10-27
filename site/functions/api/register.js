import { json, bad, options, cors, hashPassword, newId, newToken, validEmail, createSession, setSessionCookie } from './_util.js';

export const onRequestOptions = () => options();

export async function onRequestPost({ request, env }) {
  let body;
  try { body = await request.json(); } catch { return bad('invalid json'); }
  const email = (body.email || '').trim().toLowerCase();
  const password = body.password || '';
  if (!validEmail(email)) return bad('Enter a valid email address.');
  if (password.length < 6) return bad('Password must be at least 6 characters.');

  const existing = await env.medcore_db.prepare('SELECT id FROM users WHERE email=?').bind(email).first();
  if (existing) return bad('That email is already registered.', 409);

  const id = newId();
  const salt = newToken().slice(0, 16);
  const pass_hash = await hashPassword(password, salt);
  await env.medcore_db.prepare('INSERT INTO users (id,email,pass_hash,salt,created_at) VALUES (?,?,?,?,?)')
    .bind(id, email, pass_hash, salt, Date.now()).run();

  const token = await createSession(env, id);
  return json({ ok: true, user: { id, email } }, 200, { 'Set-Cookie': setSessionCookie(token), ...cors() });
}
