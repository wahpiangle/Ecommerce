import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server";
import getSession from "@/app/actions/getSession";

export async function GET() {
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