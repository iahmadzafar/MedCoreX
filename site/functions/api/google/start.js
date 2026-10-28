// GET /api/google/start?return=<path> → redirect to Google's consent screen.
import { options } from '../_util.js';

export const onRequestOptions = () => options();

export async function onRequestGet({ request, env }) {
  if (!env.GOOGLE_CLIENT_ID) {
    return new Response('Google sign-in is not configured yet (missing GOOGLE_CLIENT_ID).', { status: 503 });
  }
  const url = new URL(request.url);
  const ret = url.searchParams.get('return') || '/';
  const state = crypto.randomUUID();

  const auth = new URL('https://accounts.google.com/o/oauth2/v2/auth');
  auth.searchParams.set('client_id', env.GOOGLE_CLIENT_ID);
  auth.searchParams.set('redirect_uri', url.origin + '/api/google/callback');
  auth.searchParams.set('response_type', 'code');
  auth.searchParams.set('scope', 'openid email profile');
  auth.searchParams.set('state', state);
  auth.searchParams.set('prompt', 'select_account');

  const h = new Headers();
  h.set('Location', auth.toString());
  h.append('Set-Cookie', `g_state=${state}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=1800`);
  h.append('Set-Cookie', `g_return=${encodeURIComponent(ret).slice(0, 200)}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=1800`);
  return new Response(null, { status: 302, headers: h });
}
