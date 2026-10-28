import { json, options, cors, readCookie, clearSessionCookie } from './_util.js';

export const onRequestOptions = () => options();

export async function onRequestPost({ request, env }) {
  const token = readCookie(request);
  if (token) {
    try { await env.medcore_db.prepare('DELETE FROM sessions WHERE token=?').bind(token).run(); } catch {}
  }
  return json({ ok: true }, 200, { 'Set-Cookie': clearSessionCookie(), ...cors() });
}
