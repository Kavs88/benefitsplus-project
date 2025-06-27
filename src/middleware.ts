import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const { pathname } = req.nextUrl;

    // Check if user is authenticated
    if (!token) {
      return NextResponse.redirect(new URL("/", req.url));
    }

    // Role-based access control
    if (pathname.startsWith("/dashboard/partner")) {
      if (token.role !== "partner") {
        return NextResponse.redirect(new URL("/dashboard/member", req.url));
      }
    }

    if (pathname.startsWith("/dashboard/member")) {
      if (token.role !== "member") {
        return NextResponse.redirect(new URL("/dashboard/partner", req.url));
      }
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  },
);

export const config = {
  matcher: ["/dashboard/:path*"],
};
