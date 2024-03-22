import prisma from './client'
require("dotenv").config();

// User CRUD

// createUser
export async function createUser(data: {
    email: string;
    password: string;
    username: string;
}) {
    return prisma.user.create({
        data,
    });
}