import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server";

export async function GET(req) {
    const listingType = req.nextUrl.searchParams.get('listingType')
    switch(listingType) {
        case 'rent':
            return;
            // TODO
        case 'purchase':
            return;
            // TODO
        default:
            return;
    }
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