'use client';
import { loginSchema, signupSchema } from "@/zod/authSchema";
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
import Link from "next/link";

const SignupForm = () => {

    const [passwordVisible, setPasswordVisible] = useState(false);


    const togglePasswordVisibility = () => {
        setPasswordVisible(prev => !prev);
    }

    const form = useForm({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    })

    function onSubmit(values) {
        console.log(values)
    }

    return (
        <Card className=" w-full max-w-md">
            <CardHeader>
                <CardTitle>Login</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 max-h-[450px] p-1 overflow-y-auto">
                        <div className="flex gap-4">

                            <FormField
                                control={form.control}
                                name="firstName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>First Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your first name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="lastName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Last Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your last name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter your email" {...field} />
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
                                    <FormLabel>
                                        Password
                                    </FormLabel>
                                    <FormControl>
                                        <div className="relative">
                                            <Input type={passwordVisible ? "text" : "password"} className="pr-12" placeholder="Re-enter your password" {...field} />
                                            {
                                                passwordVisible ? (
                                                    <Button onClick={togglePasswordVisibility} type="button" className="bg-accent hover:bg-input rounded-l-none border-input border absolute top-1/2 right-0 -translate-y-1/2" size="icon" variant="ghost">
                                                        <EyeOff />
                                                    </Button>) : (
                                                    <Button onClick={togglePasswordVisibility} type="button" className="bg-accent hover:bg-input rounded-l-none border-input border absolute top-1/2 right-0 -translate-y-1/2" size="icon" variant="ghost">
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
                        <FormField
                            control={form.control}
                            name="confirmPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Confirm Password
                                    </FormLabel>
                                    <FormControl>
                                        <div className="relative">
                                            <Input type={passwordVisible ? "text" : "password"} className="pr-12" placeholder="Enter your password" {...field} />
                                            {
                                                passwordVisible ? (
                                                    <Button onClick={togglePasswordVisibility} type="button" className="bg-accent hover:bg-input rounded-l-none border-input border absolute top-1/2 right-0 -translate-y-1/2" size="icon" variant="ghost">
                                                        <EyeOff />
                                                    </Button>) : (
                                                    <Button onClick={togglePasswordVisibility} type="button" className="bg-accent hover:bg-input rounded-l-none border-input border absolute top-1/2 right-0 -translate-y-1/2" size="icon" variant="ghost">
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

                        <Button type="submit" className="w-full">Login</Button>
                    </form>
                </Form>
            </CardContent>
            <CardFooter>
                <CardDescription className="mx-auto">
                    Already have an account? <Link href="/login" className="text-blue-500 hover:text-primary hover:underline">Login</Link>
                </CardDescription>
            </CardFooter>
        </Card>
    )
}

export default SignupForm