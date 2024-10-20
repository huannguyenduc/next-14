import { AUTH_ROUTES, RouterPath } from '@/constants';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const currentToken = request.cookies.get('access_token');

  if (request.nextUrl.pathname.startsWith('/admin') && !currentToken) {
    const response = NextResponse.redirect(new URL(RouterPath.LOGIN, request.url));
    return response;
  }

  if (AUTH_ROUTES.includes(request.nextUrl.pathname) && !!currentToken) {
    return NextResponse.redirect(new URL(RouterPath.DASHBOARD, request.url));
  }
}

export const config = {
  matcher: ['/admin/:path*', '/auth/:path*'],
};
