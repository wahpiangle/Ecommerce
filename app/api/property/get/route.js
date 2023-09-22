import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server";
import getSession from "@/app/actions/getSession";

export async function GET(request) {
    if (request.url.length < 0) return new Response("Error"); //! Required for build
    try {
        const session = await getSession();
        const user = await prisma.user.findUnique({
            where: {
                email: session?.user?.email
            }
        })
        if (!user) {
            return new NextResponse('Unauthorized', { status: 401 });
        }

        const properties = await prisma.property.findMany({
            where: {
                ownerId: user?.id
            }
        })
        return new NextResponse(JSON.stringify(properties), { status: 200 });
    } catch (error) {
        console.log('Property Get Error: ', error)
    }
}