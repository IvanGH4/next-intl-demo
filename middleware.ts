import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";

import { routing } from "./i18n/routing";

export default async function middleware(request: NextRequest) {
  // Create and call the next-intl middleware (example)
  const handleI18nRouting = createMiddleware(routing);
  const response = handleI18nRouting(request);

  return response;
}

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(es|en)/:path*"],
};
