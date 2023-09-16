import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server";

export async function GET(req) {
    const listingType = req.nextUrl.searchParams.get('listingType')
    return await getProperties(listingType)
}

// ! in mongoDB listingType is saved as 'Rent' or 'Sale' but in the query it is 'rent' or 'purchase'
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
                console.log('Property Get Error: ', error)
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
                console.log('Property Get Error: ', error)
            }
        default:
            try{
                const properties = await prisma.property.findMany();
                return new NextResponse(JSON.stringify(properties), { status: 200 });
            }catch(error){
                console.log('Property Get Error: ', error)
            }
    }

}