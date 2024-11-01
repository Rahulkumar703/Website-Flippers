'use client';
import { Link } from 'nextjs13-progress';
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { signOut, useSession } from 'next-auth/react';

const LoginBtns = ({ className }) => {

    const session = useSession();
    const loggedIn = session?.status === 'authenticated';

    return (
        <div className={cn("flex gap-2 items-center", className)}>
            {
                loggedIn ? (
                    <Link href="/logout">
                        <Button variant='destructive'>Logout</Button>
                    </Link>
                ) : (
                    <>
                        <Link href="/login" className="flex-1">
                            <Button variant="outline" className="w-full">
                                {/* <LogIn className="w-4 h-4 mr-2" /> */}
                                Login
                            </Button>
                        </Link>
                        <Link href="/signup" className="flex-1">
                            <Button className="w-full">
                                {/* <Key className="w-4 h-4 mr-2" /> */}
                                Sign up</Button>
                        </Link>
                    </>
                )
            }
        </div>
    )
}

export default LoginBtns