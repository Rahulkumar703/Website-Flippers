'use client';
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
import { setPasswordSchema } from "@/zod/authSchema";

const SetPassworForm = () => {



    const form = useForm({
        resolver: zodResolver(setPasswordSchema),
        defaultValues: {
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
                <CardTitle>Set a new Password</CardTitle>
            </CardHeader>
            <CardContent className="gap-6 flex flex-col items-center">

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex flex-col gap-4">
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Enter new Password</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter new password" {...field} />
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
                                    <FormLabel>Re-enter new Password</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Re-enter new password" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" className="w-full">Set Password</Button>
                    </form>
                </Form>

            </CardContent>
            <CardFooter>
                <CardDescription className="mx-auto">Back to  <a href="/login" className="text-blue-500 hover:text-primary hover:underline">Login</a></CardDescription>
            </CardFooter>
        </Card>
    )
}

export default SetPassworForm