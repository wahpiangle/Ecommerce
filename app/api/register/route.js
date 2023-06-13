import bcrypt from 'bcrypt';
import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';

export async function POST(request){
    try{
        const body = await request.json(); //fetch request body
        const { email, name, password } = body; //destructure body

        if( !email || !name || !password){
            return new NextResponse('Missing info', {status: 400});
        }
        if(password.length < 8){
            return new NextResponse('Password too short', {status: 400});
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const existingUser = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if(existingUser){
            return new NextResponse('User already exists', {status: 409});
        }

        const user = await prisma.user.create({
            data:{
                email,
                name,
                hashedPassword,
            }
        })

        //new keyword is not required here as .json() is used
        return new NextResponse(JSON.stringify(user), {status: 201});

    }catch(error){
        console.log(error, 'Registration error');
        return new NextResponse('Internal Server Error', {status: 500});
    }

}