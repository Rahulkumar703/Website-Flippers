import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import { adminRoutes, authRoutes, publicRoutes } from "./routes";
import { ROLES } from "./lib/utils";

// Define the routes you want to protect
export const config = {
    matcher: '/((?!api|_next|static|public|favicon.ico).*)'
};

export async function middleware(req) {
    const sessionToken = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    const pathname = req.nextUrl.pathname;





    if (sessionToken) {
        const ROLE = sessionToken.role;

        if (authRoutes.includes(pathname)) {
            const url = new URL(`/dashboard/${ROLE.toLowerCase()}`, req.url);
            return NextResponse.redirect(url);
        }

        if (pathname.startsWith('/dashboard') && pathname !== `/dashboard/${ROLE.toLowerCase()}`) {

            if (!ROLES.includes(ROLE)) {
                const url = new URL(`/`, req.url);
                return NextResponse.redirect(url);
            }

            const url = new URL(`/dashboard/${ROLE.toLowerCase()}`, req.url);
            return NextResponse.redirect(url);
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
