import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const properties = await prisma.property.findMany({
            where: {
                listingType: 'Rent'
            }
        })
        return new NextResponse(JSON.stringify(properties), { status: 200 });
    } catch (error) {
        console.log('Property Get Error: ', error)
    }
}
// TODO handle route action based on params
//TODO handle POST request with filters