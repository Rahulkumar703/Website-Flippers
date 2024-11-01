'use client';
import { loginSchema } from "@/zod/authSchema";
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
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link } from 'nextjs13-progress';
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";


const LoginForm = () => {

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    const router = useRouter();


    const togglePasswordVisibility = () => {
        setPasswordVisible(prev => !prev);
    }

    const form = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    async function onSubmit(values) {
        try {
            setLoading(true);
            const res = await signIn("credentials", {
                email: values.email,
                password: values.password,
                redirect: false
            });

            if (res.error) {
                return toast.error(res.error);
            }

            router.replace('/');

        } catch (error) {
            toast.error(error.message)
        }
        finally {
            setLoading(false)
        }
    }

    return (
        <Card className=" w-full max-w-md">
            <CardHeader>
                <CardTitle>Login</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input disabled={loading} type="email" placeholder="Enter your email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <div className="relative">
                                            <Input type={passwordVisible ? "text" : "password"} className="pr-12" placeholder="Enter your password" {...field} />
                                            {
                                                passwordVisible ? (
                                                    <Button disabled={loading} onClick={togglePasswordVisibility} type="button" className="bg-accent hover:bg-input rounded-l-none border-input border absolute top-1/2 right-0 -translate-y-1/2" size="icon" variant="ghost">
                                                        <EyeOff />
                                                    </Button>) : (
                                                    <Button disabled={loading} onClick={togglePasswordVisibility} type="button" className="bg-accent hover:bg-input rounded-l-none border-input border absolute top-1/2 right-0 -translate-y-1/2" size="icon" variant="ghost">
                                                        <Eye />
                                                    </Button>
                                                )
                                            }
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <CardDescription className="mr-auto"><Link href="/reset-password" className="text-blue-500 hover:text-primary hover:underline">Forgot Password?</Link></CardDescription>
                        <Button disabled={loading} type="submit" className="w-full">Login</Button>
                    </form>
                </Form>
            </CardContent>
            <CardFooter>
                <CardDescription className="mx-auto">Don&apos;t have an account? <Link href="/signup" className="text-blue-500 hover:text-primary hover:underline">Create an account</Link></CardDescription>
            </CardFooter>
        </Card>
    )
}

export default LoginForm