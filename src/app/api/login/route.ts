import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@/db/client";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    const loginUser = await prisma.user.findUnique({
      where: { email: email },
    });
    if (!loginUser) {
      return NextResponse.json(
        { user: null, message: "Password is wrong or email does not exist" },
        { status: 400 },
      );
    }

    // Convert bcrypt.compare to use Promises
    const match = await bcrypt.compare(password, loginUser.password);
    if (!match) {
      return NextResponse.json(
        { user: null, message: "Password is wrong or email does not exist" },
        { status: 400 },
      );
    }

    // If password matches
    const rand = Math.random().toString(36).substring(7);
    const token = await bcrypt.hash(
      rand + loginUser.username + loginUser.email,
      10,
    );
    const tokenExpiryTimestamp = new Date().getTime() + 1000 * 60 * 60 * 24; // 1 day in milliseconds
    const tokenExpiry = new Date(tokenExpiryTimestamp);

    await prisma.user.update({
      where: { email: email },
      data: { token: token, tokenExpiry: tokenExpiry },
    });

    return NextResponse.json(
      {
        user: loginUser.username,
        message: "Login successful",
        token: token,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error in login:", error);
    return NextResponse.json(
      { user: null, message: "Server error", failed: true },
      { status: 500 },
    );
  }
}
