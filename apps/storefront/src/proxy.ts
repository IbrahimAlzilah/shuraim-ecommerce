import createMiddleware from "next-intl/middleware"

import { routing } from "@rawnaq/i18n/routing"

export default createMiddleware(routing)

export const config = {
  // Skip API routes, Next.js internals and files with an extension (assets)
  matcher: ["/((?!api|trpc|_next|_vercel|.*\\..*).*)"],
}
