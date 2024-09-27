// export { auth as middleware } from "./auth";
import { NextResponse } from "next/server";
import { auth } from "../auth";

export default auth((request) => {
  if (!request.auth && request.nextUrl.pathname !== "/login") {
    const newUrl = new URL("/login", request.nextUrl.origin);
    return Response.redirect(newUrl);
  }

  if (request.auth && request.nextUrl.pathname === "/login") {
    const newUrl = new URL("/inspection-requests", request.nextUrl.origin);
    return Response.redirect(newUrl);
  }
});

export const config = {
  matcher: ["/login"],
  // matcher: ["/((?!api|_next/static|_next/image|favicon.ico|firebase-messaging-sw.js).*)"],
};
