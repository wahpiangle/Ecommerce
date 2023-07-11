import prisma from "@/app/libs/prismadb"
import getCurrentUser from "@/app/actions/getCurrentUser"
import { NextResponse } from "next/server";

export async function GET(){
    try{
        const { id:userID } = await getCurrentUser();
        return new NextResponse(JSON.stringify(userID), {status: 200})
    }catch(e){
        console.log('Property Get Error: ', e)
    }
}