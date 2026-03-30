import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
// https://34-238-137-65.sslip.io
const fastapi_path = "https://3-91-74-128.sslip.io";

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (pathname.startsWith("/next-proxy/")) {
    const path = pathname.replace("/next-proxy", "");
    const url = `${fastapi_path}${path}${search}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/next-proxy/:path*"],
};