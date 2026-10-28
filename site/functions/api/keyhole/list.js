import { json, bad, options, cors, keyholeOk } from '../_util.js';

export const onRequestOptions = () => options();

// GET /api/keyhole/list → every account + live session counts
export async function onRequestGet({ request, env }) {
  if (!keyholeOk(request, env)) return bad('Not the librarian.', 401);
  const res = await env.medcore_db.prepare(`
    SELECT u.username, u.email, u.created_at,
           (SELECT COUNT(*) FROM sessions s WHERE s.user_id = u.id AND s.expires_at > ?) AS active_sessions,
           (SELECT MAX(s.created_at) FROM sessions s WHERE s.user_id = u.id) AS last_login
    FROM users u ORDER BY u.created_at DESC`)
    .bind(Date.now()).all();
  return json({ ok: true, users: res.results || [] }, 200, cors());
}

export async function onRequestPost({ request }) {
  return bad('Read the ledger with GET.', 405);
}
