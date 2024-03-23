import { NextResponse } from "next/server";
import { hash } from "bcrypt";

import prisma from "@/db/client";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { email, username, password } = body;

    if (!email || !username || !password) {
      return NextResponse.json(
        { user: null, message: "email, username, password are mandatory" },
        { status: 400 },
      );
    }

    // const allUsers = await db.user.findMany()
    const existingUserByEmail = await prisma.user.findUnique({
      where: { email: email },
    });
    if (existingUserByEmail) {
      return NextResponse.json(
        { user: null, message: "user with this email exists" },
        { status: 409 },
      );
    }

    const hashedpassword = await hash(password, 10);
    const newUser = await prisma.user.create({
      data: {
        email: email,
        username: username,
        password: hashedpassword,
      },
    });

    return NextResponse.json(
      { user: newUser.username, message: "create new user" },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json({ user: null, message: error, failed: true });
  }
}
