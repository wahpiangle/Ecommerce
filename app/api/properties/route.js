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
            getProperties();
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

async function getProperties(){
    try{
        const properties = await prisma.property.findMany();
        return new NextResponse(JSON.stringify(properties), { status: 200 });
    }catch(error){
        console.log('Property Get Error: ', error)
    }
}