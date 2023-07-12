import prisma from "@/app/libs/prismadb";
import { NextResponse } from 'next/server';

export async function GET(request){
    try{
        const url = request.url.split('/')
        const id = url[url.length - 1]

        const property = await prisma.property.findUnique({
            where: {
                id: id
            }
        })
        if(!property) return new NextResponse('Property not found', { status: 404 });
        return new NextResponse(JSON.stringify(property), { status: 200 });
    }catch(error){
        return new NextResponse(error, { status: 500 });
    }
}

