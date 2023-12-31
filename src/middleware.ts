import { NextRequest, NextResponse } from "next/server";
import {isAuthenticated} from "./lib/pocketbase";
import { cookies } from "next/headers";

export async function middleware(req:NextRequest) {
  console.log(`[middleware] ${req.nextUrl.pathname}, ${req.method}`);
  console.log('with cookies: ', req.cookies);
  const isLoggedIn = await isAuthenticated(req.cookies as any);
  if (req.nextUrl.pathname && req.nextUrl.pathname.startsWith('/login')) {
    if (isLoggedIn) {
      console.log('user cookies show that they are logged in.');
      console.log('url:',new URL('/',req.url));
      return NextResponse.redirect(new URL('/',req.url));
    }
    return;
  }
  if (!isLoggedIn) {
    console.log('user cookies show that they are NOT logged in. Redirecting...');
    return NextResponse.redirect(new URL('/login',req.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
      '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};