import { json, options, cors, getUser } from './_util.js';

export const onRequestOptions = () => options();

export async function onRequestGet({ request, env }) {
  const u = await getUser(request, env);
  if (!u) return json({ ok: false, user: null }, 200, cors());
  return json({ ok: true, user: { id: u.id, email: u.email, username: u.username, created_at: u.created_at } }, 200, cors());
}
