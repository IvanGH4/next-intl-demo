import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";
import path from "path";

export default async function middleware(request: NextRequest) {
  // Create and call the next-intl middleware to handle locale
  const handleI18nRouting = createMiddleware(routing);

  // Let next-intl middleware handle i18n first
  let response = handleI18nRouting(request);

  // Extract the locale from the i18n-handled request
  const locale = request.nextUrl.pathname.split("/")[1];

  // Custom redirect logic after i18n is applied
  const { pathname } = request.nextUrl;

  if (pathname === `/${locale}/old-route`) {
    // Redirect to a new route, ensuring the locale is included in the URL
    const url = new URL(`/${locale}/new-route`, request.url);
    response = NextResponse.redirect(url);
  }

  return response;
}

export const config = {
  // Match only internationalized pathnames
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
