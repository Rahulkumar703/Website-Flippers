'use server';

import { db } from "@/lib/db";
import { validateInputs } from "@/lib/utils";
import { loginSchema, signupSchema } from "@/zod/authSchema";
import { compare, hash } from "bcryptjs";

export const signup = async (userData) => {
    try {
        // Validate the user input
        const validatedUser = validateInputs(userData, signupSchema);

        if (!validatedUser.success) {
            return {
                success: false,
                type: "validation",
                message: "Invalid input",
                // errors: validatedUser.errors
            };
        }

        const { firstName, lastName, email, password } = validatedUser.data;

        // Check if user already exists
        const existingUser = await db.user.findUnique({
            where: { email: email }
        });

        if (existingUser) {
            return {
                success: false,
                type: "error",
                message: "You are already registered."
            };
        }

        // Hash the password
        const hashedPassword = await hash(password, 10);

        // Create the new user
        const newUser = await db.user.create({
            data: {
                firstName,
                lastName,
                email,
                password: hashedPassword
            }
        });

        return {
            success: true,
            type: "success",
            message: "You are registered successfully.",
        };

    } catch (error) {
        return {
            success: false,
            type: "error",
            message: error.message
        };
    }
}
const createSession = async (userId) => {
    try {
        // Clear any existing sessions for the user before creating a new one
        await db.session.deleteMany({
            where: { userId }
        });

        // Create a new session
        return await db.session.create({
            data: {
                expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000), // 1 day expiration
                sessionToken: crypto.randomUUID(), // Generate a random token
                userId,
            },
        });
    } catch (error) {
        throw new Error(error.message);
    }
};


export const login = async (userData) => {
    try {
        // Validate the user input
        const validatedUser = validateInputs(userData, loginSchema);

        if (!validatedUser.success) {
            return {
                success: false,
                type: "validation",
                message: "Invalid input",
                // errors: validatedUser.errors
            };
        }

        const { email, password } = validatedUser.data;

        // Check if user already exists
        const user = await db.user.findUnique({
            where: { email: email }
        });

        if (!user) {
            return {
                success: false,
                type: "error",
                message: "Incorrect Email or Password."
            };
        }

        // Compare the password with the hashed password in the database
        const isValidPassword = await compare(password, user.password);
        if (!isValidPassword) {
            throw new Error('Incorrect Email or Password.');
        }

        // Check for session and create a new one
        const session = await createSession(user.id);

        // Return the user object
        return {
            success: true,
            type: "success",
            user: {
                id: user.id,
                name: `${user.firstName} ${user.lastName}`,
                email: user.email,
                role: user.role,
                sessionToken: session.sessionToken
            },
        };

    } catch (error) {
        return {
            success: false,
            type: "error",
            message: error.message
        };
    }
}