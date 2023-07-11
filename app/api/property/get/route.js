import prisma from "@/app/libs/prismadb"
import getCurrentUser from "@/app/actions/getCurrentUser"
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const { id: userID } = await getCurrentUser();
        if(!userID){
            return new NextResponse('Unauthorized', {status: 401});
        }

        const properties = await prisma.property.findMany({
            where: {
                ownerId: userID
            }
        })
        return new NextResponse(JSON.stringify(properties), {status: 200});
    } catch (error) {
        console.log('Property Get Error: ', error)
    }
}