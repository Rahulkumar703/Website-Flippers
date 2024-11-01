import { PrismaClient } from '@prisma/client';

let db;

if (process.env.NODE_ENV === 'production') {
    // Use a single PrismaClient instance in production
    db = new PrismaClient();
} else {
    // Prevent multiple PrismaClient instances in development
    if (!global.db) {
        global.db = new PrismaClient();
    }
    db = global.db;
}

export { db };
