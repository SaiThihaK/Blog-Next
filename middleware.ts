import { getToken } from "next-auth/jwt";
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export const middleware = async (req: NextRequest, event: NextFetchEvent) => {
  const token = await getToken({ req });
  const isAuthenticated = !!token;
  if (req.nextUrl.pathname.startsWith("/admin") && !isAuthenticated) {
    return NextResponse.rewrite(new URL("/admin/login", req.url));
  }
  if (req.nextUrl.pathname.startsWith("/admin/login") && isAuthenticated) {
    return NextResponse.rewrite(new URL("/admin", req.url));
  }
};

export const config = {
  matcher: ["/admin/:path*"],
};
