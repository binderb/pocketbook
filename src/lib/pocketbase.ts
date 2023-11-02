import PocketBase from 'pocketbase';
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';

const pb = new PocketBase(process.env.NEXT_PUBLIC_PB_URL);
export default pb;

export async function authenticate (username:string, password:string ) {
  try {
    const result = await pb.collection('users').authWithPassword(username,password);
    // console.log('authenticate result: ',result);
    if (!result?.token) {
      throw new Error("Invalid email or password");
    }
    return result;
  } catch (err:any) {
    throw err;
  }
}

export async function isAuthenticated(cookieStore: ReadonlyRequestCookies) {
  const cookie = cookieStore.get('pb_auth');
  if (!cookie) {
    return false;
  }
  pb.authStore.loadFromCookie(cookie?.value || '');
  return pb.authStore.isValid || false;
}

export async function getUser(cookieStore: ReadonlyRequestCookies) {
  const cookie = cookieStore.get('pb_auth');
  if (!cookie) {
    return false;
  }
  pb.authStore.loadFromCookie(cookie?.value || '');
  return pb.authStore.model;
}