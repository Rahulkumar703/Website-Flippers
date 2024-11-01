'use client';
import { loginSchema, resetPasswordSchema } from "@/zod/authSchema";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { useState } from "react";
import { ArrowLeft, Check, ChevronLeft } from "lucide-react";
import { H3 } from "../ui/typography";
import { Link } from 'nextjs13-progress';


const ResetPassworForm = () => {

    const [resetLinkSent, setResetLinkSent] = useState(false);



    const form = useForm({
        resolver: zodResolver(resetPasswordSchema),
        defaultValues: {
            email: "",
        },
    })

    function onSubmit(values) {
        console.log(values)
        setResetLinkSent(true)
    }
    return (
        <Card className=" w-full max-w-md">
            <CardHeader>
                <CardTitle>Reset Password</CardTitle>
            </CardHeader>
            <CardContent className="gap-6 flex flex-col items-center">

                {
                    resetLinkSent ?
                        (
                            <>
                                <div className=" text-green-500 bg-green-200 rounded-full p-6 mt-5">
                                    <Check className="w-16 h-16 mx-auto" />
                                </div>
                                <H3 className="text-center">Reset link has been sent</H3>
                                <p className="text-sm text-center text-muted-foreground">A reset email will be sent only if an account is associated with this email address.</p>
                            </>
                        )
                        :
                        (
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex flex-col gap-4">
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Enter your registered email" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <Button type="submit" className="w-full">Send Reset Link</Button>
                                </form>
                            </Form>
                        )
                }

            </CardContent>
            {
                resetLinkSent ?
                    <CardFooter>
                        <CardDescription className="mx-auto text-foreground">
                            <Link href="/login" className="text-blue-500 hover:text-primary hover:underline">
                                <Button variant="outline">
                                    <ArrowLeft className="w-4 h-4 mr-2" />
                                    Back to Login</Button>
                            </Link>
                        </CardDescription>
                    </CardFooter>
                    :
                    null
            }
        </Card>
    )
}

export default ResetPassworForm