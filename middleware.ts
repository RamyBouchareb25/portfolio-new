/**
 * Middleware for NextAuth.js v4
 * Protects admin routes and redirects unauthenticated users to sign-in
 */

import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    // Check if user is trying to access admin routes
    if (req.nextUrl.pathname.startsWith("/admin")) {
      const token = req.nextauth.token;

      // Redirect to sign-in if not authenticated
      if (!token) {
        return NextResponse.redirect(new URL("/auth/signin", req.url));
      }

      // Check if user is admin
      if (token.role !== "ADMIN") {
        return NextResponse.redirect(
          new URL("/auth/error?error=forbidden", req.url),
        );
      }
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        // Allow public routes
        if (req.nextUrl.pathname.startsWith("/auth")) {
          return true;
        }
        if (req.nextUrl.pathname === "/") {
          return true;
        }

        // Require authentication for admin routes
        if (req.nextUrl.pathname.startsWith("/admin")) {
          return !!token;
        }

        return true;
      },
    },
  },
);

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
