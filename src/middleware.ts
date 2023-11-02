import { NextRequest, NextResponse } from "next/server";
import {isAuthenticated} from "./lib/pocketbase";

export async function middleware(req:NextRequest) {
  console.log(`attempting route to ${req.nextUrl.pathname}, ${req.method}...`)
  const isLoggedIn = await isAuthenticated(req.cookies as any);
  if (req.nextUrl.pathname && req.nextUrl.pathname.startsWith('/login')) {
    if (isLoggedIn) {
      console.log('url:',new URL('/',req.url));
      return NextResponse.redirect(new URL('/',req.url));
    }
    return;
  }
  if (!isLoggedIn) {
    return NextResponse.redirect(new URL('/login',req.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
      '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};