import { NextResponse } from "next/server";
import prisma from '@/app/libs/prismadb';

export async function POST(request){
    try{
        const body = await request.json();
        const { title, description, type, price, facilities, bathroom, bedroom, listingType, images, country, size } = body;
        if(!title || !description || !type || !price || !facilities || !bathroom || !bedroom || !listingType || !country || !size){
            return new NextResponse('Missing property data', {status: 400});
        }

        if(listingType === 'Rent' && listingType !== 'Sale'){
            const property = await prisma.property.create({
                data: {
                    title,
                    description,
                    type,
                    rentalPrice: price,
                    facilities,
                    bathroom,
                    bedroom,
                    listingType,
                    images,
                    country,
                    size
                }
            });
            if(!property){
                return new NextResponse('Property creation error', {status: 500});
            }
            return new NextResponse(JSON.stringify(property), {status: 201});
        }
        else if(listingType === 'Sale' && listingType !== 'Rent'){
            const property = await prisma.property.create({
                data: {
                    title,
                    description,
                    type,
                    salePrice: price,
                    facilities,
                    bathroom,
                    bedroom,
                    listingType,
                    images,
                    country,
                    size
                }
            });
            if(!property){
                return new NextResponse('Property creation error', {status: 500});
            }
            return new NextResponse(JSON.stringify(property), {status: 201});
        }

        return new NextResponse(JSON.stringify(body), {status: 201});
    }catch(error){
        console.log(error, 'Property creation error');
        return new NextResponse('Internal Server Error', {status: 500});
    }
}