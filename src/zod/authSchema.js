import { z } from "zod";



export const loginSchema = z.object({
    email: z.string()
        .email({ message: "Please enter a valid email address" })
        .min(5, { message: "Email must be atleast 5 character long." }),
    password: z.string(),
});


export const signupSchema = z.object({
    firstName: z.string()
        .min(3, { message: "Please enter a valid First Name." }),
    lastName: z.string()
        .min(3, { message: "Please enter a valid Last Name." }),
    email: z.string()
        .email({ message: "Please enter a valid email address" })
        .min(5, { message: "Email must be atleast 5 character long." }),
    password: z.string()
        .min(8, { message: "Password must be at least 8 characters long." })
        .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter." })
        .regex(/[0-9]/, { message: "Password must contain at least one number." })
        .regex(/[@$!%*?&]/, { message: "Password must contain at least one special character (eg: @,$,%,!,*,?,&)." }),
    confirmPassword: z.string({ message: "Please re-enter your password." })
}).refine(data => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"]
});



export const resetPasswordSchema = z.object({
    email: z.string()
        .email({ message: "Please enter a valid email address" })
        .min(5, { message: "Email must be atleast 5 character long." }),
});



export const setPasswordSchema = z.object({
    password: z.string()
        .min(8, { message: "Password must be at least 8 characters long." })
        .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter." })
        .regex(/[0-9]/, { message: "Password must contain at least one number." })
        .regex(/[@$!%*?&]/, { message: "Password must contain at least one special character (eg: @,$,%,!,*,?,&)." }),
    confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"]
});
