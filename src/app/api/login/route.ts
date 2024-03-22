import {NextResponse} from "next/server";
import {hash} from "bcrypt";

import {createUser} from "../../../db/prismaUtils";


// export async function GET()
// {
//     return NextResponse.json({ success: true })
// }

export async function POST(request: Request) {
    try {
        const body = await request.json()

        const {email, username, password} = body

        // // const allUsers = await db.user.findMany()
        // const existingUserByEmail = await db.user.findUnique({
        //     where: { email: email}
        // })
        // if(existingUserByEmail){
        //     return NextResponse.json({ user: null, message: "user with this email exists"}, {status: 409})
        // }
        // const existingUserByUsername = await db.user.findUnique({
        //     where: { username: username}
        // })
        // if(existingUserByUsername){
        //     return NextResponse.json({ user: null, message: "User with this username exists"}, {status: 409})
        // }

        const hashedpassword = await hash(password, 10)
        const newUser = await createUser({
            username: username,
            email:
            email,
            password:
            hashedpassword
        })


        return NextResponse.json({user: newUser.username, message: "create new user"}, {status: 201})
    } catch (error) {
        return NextResponse.json({user: null, message: error, failed: true})

    }
}