import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server";

export async function GET(req) {
    if (req.url.length < 0) return new Response("Error"); //! Required for build
    const listingType = req.nextUrl.searchParams.get('listingType')
    return await getProperties(listingType);
}

export async function POST(req){
    // TODO handle filters
    return new NextResponse('TEST POST');
}

//* in mongoDB listingType is saved as 'Rent' or 'Sale' but in the query it is 'rent' or 'purchase'
async function getProperties(listingType){
    switch(listingType){
        case 'rent':
            try{
                const properties = await prisma.property.findMany({
                    where:{
                        listingType: 'Rent'
                    }
                });
                return new NextResponse(JSON.stringify(properties), { status: 200 });
            }catch(error){
                console.log('Property Get Error (rent): ', error)
            }
        case 'purchase':
            try {
                const properties = await prisma.property.findMany({
                    where:{
                        listingType: 'Sale'
                    }
                });
                return new NextResponse(JSON.stringify(properties), { status: 200 });
            } catch (error) {
                console.log('Property Get Error (purchase): ', error)
            }
        default:
            try{
                const properties = await prisma.property.findMany();
                return new NextResponse(JSON.stringify(properties), { status: 200 });
            }catch(error){
                console.log('Property Get Error (default): ', error)
            }
    }

}