'use client';

import PageWrapper from "@/components/PageWrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Home, Loader, Loader2 } from "lucide-react";
import { signOut } from "next-auth/react";
import { Link } from "nextjs13-progress";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const LogoutPage = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        try {
            signOut().then(() => {
                toast.success("Logout successful");
            });
        } catch (error) {
            toast.error(error.message)
        }
        finally {
            setLoading(false);
        }

    }, []);

    return (
        <PageWrapper className={'items-center justify-center min-h-[calc(100svh-72px)]'}>
            <Card>
                <CardHeader>
                    <CardTitle>
                        {loading ? 'Logging out...' : 'You have been logged out'}
                    </CardTitle>
                    <CardDescription>
                        {loading ? 'Please wait...' :
                            <>
                                Click on <span className="text-primary font-semibold">Go to home</span> if you are not redirected in a few seconds
                            </>
                        }
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex justify-center">
                        {
                            loading ?
                                <Loader2 className="w-10 h-10 border-2 border-gray-300 rounded-full animate-spin" />
                                :
                                <Link href="/">
                                    <Button variant="outline">
                                        <Home className="w-4 h-4 mr-2" />
                                        Go to home
                                    </Button>
                                </Link>
                        }
                    </div>
                </CardContent>
            </Card>
        </PageWrapper>
    )
}

export default LogoutPage