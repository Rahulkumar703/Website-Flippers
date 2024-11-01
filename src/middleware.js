import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import { adminRoutes, authRoutes, publicRoutes } from "./routes";

// Define the routes you want to protect
export const config = {
    matcher: '/((?!api|_next|static|public|favicon.ico).*)'
};

export async function middleware(req) {
    const sessionToken = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    const pathname = req.nextUrl.pathname;

    console.log(sessionToken)


    if (sessionToken) {
        if (authRoutes.includes(pathname)) {
            const url = new URL("/", req.url);
            return NextResponse.redirect(url);
        }
        if (adminRoutes.includes(pathname)) {
            const ROLE = sessionToken.role;
            if (ROLE === 'USER') {
                const url = new URL("/", req.url);
                return NextResponse.redirect(url);
            }
        }
    }
    if (!sessionToken) {
        if (!authRoutes.includes(pathname) && !publicRoutes.includes(pathname)) {
            const url = new URL("/login", req.url);
            return NextResponse.redirect(url);
        }
    }


    // If user is authenticated, continue to the requested page
    return NextResponse.next();
}
