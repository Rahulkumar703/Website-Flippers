import Link from "next/link";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const LoginBtns = ({ className }) => {
    const loggedIn = false;

    return (
        <div className={cn("flex gap-2 items-center", className)}>
            {
                loggedIn ? (
                    <Button>Logout</Button>
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