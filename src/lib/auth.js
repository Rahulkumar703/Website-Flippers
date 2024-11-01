import { PrismaAdapter } from '@auth/prisma-adapter';
import CredentialsProvider from 'next-auth/providers/credentials';
import { db } from '@/lib/db';
import { login } from '@/actions/auth';

export const authOptions = {
    providers: [
        CredentialsProvider({
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            authorize: async (credentials) => {
                try {
                    const { email, password } = credentials;
                    const res = await login({ email, password });
                    if (!res.success) {
                        throw new Error(res.message);
                    }
                    if (res.success && res.user) {
                        return res.user;
                    }
                    return null;
                } catch (error) {
                    throw new Error(error.message);
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.role = user.role,
                    token.sessionToken = user.sessionToken; // Store sessionToken in JWT token
            }
            return token;
        },
        async session({ session, token }) {
            // console.log(token)
            // Find the user session in the database
            const dbSession = await db.session.findFirst({
                where: { userId: token.id, sessionToken: token.sessionToken },
            });
            if (!dbSession) {
                return null;
            }

            // Attach user data to session if session is valid
            session.user = {
                id: token.id,
                name: session.user.name,
                email: session.user.email,
                role: session.user.role,
                // sessionToken: dbSession.sessionToken
            };

            return session;
        },
    },
    events: {
        async signIn({ user }) {
            console.log('user signed in', user);
        }
    },
    secret: process.env.NEXTAUTH_SECRET,
    adapter: PrismaAdapter(db),
    session: {
        strategy: 'jwt',
        maxAge: 1 * 24 * 60 * 60, // 1 day
    },
    pages: {
        signIn: '/login',
        signOut: '/',
        error: '/login',
    },
};

