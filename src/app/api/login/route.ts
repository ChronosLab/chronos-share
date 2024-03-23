import { NextResponse } from "next/server";
import { hash } from "bcrypt";

import prisma from "@/db/client";

const rand = Math.random().toString(36).substring(7);

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { email, password } = body

        const hashedpassword = await hash(password, 10)
        const loginUser = await prisma.user.findUnique({
            where: { email: email }
        })

        if(!loginUser || loginUser.password !== hashedpassword){ 
            return NextResponse.json({ user: null, message: "password is wrong or email not exist" }, { status: 400 })
        }

        // store in local cache 
        const token = await hash(rand, loginUser.username + loginUser.email)
        const tokenExpiry = new Date().getTime() + 1000 * 60 * 60 * 24 // 1 day

        await prisma.user.update({
            where: { email: email },
            data: { token: token, tokenExpiry: tokenExpiry }
        })

        return token
    } catch (error) {
        return NextResponse.json({ user: null, message: error, failed: true })

    }
}