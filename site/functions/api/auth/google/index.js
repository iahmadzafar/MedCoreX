import { options } from '../../_util.js';

export const onRequestOptions = () => options();

// GET /api/auth/google → start the Google OAuth consent flow
export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);
  const clientId = env.GOOGLE_CLIENT_ID;
  if (!clientId) {
    return new Response('Google sign-in is not configured yet (missing GOOGLE_CLIENT_ID).', { status: 503 });
  }
  const redirectUri = url.origin + '/api/auth/google/callback';
  const state = crypto.randomUUID();
  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: 'code',
    scope: 'openid email profile',
    state: state,
    access_type: 'online',
    prompt: 'select_account'
  });
  const res = new Response(null, {
    status: 302,
    headers: { Location: 'https://accounts.google.com/o/oauth2/v2/auth?' + params.toString() }
  });
  res.headers.append('Set-Cookie',
    'medcore_oauth_state=' + state + '; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=600');
  return res;
}
