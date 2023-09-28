import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    if (request.url.length < 0) return new Response("Error"); //! Required for build
    const { id } = params;
    const property = await prisma.property.findUnique({
        where: {
            id: id,
        },
    });
    if (!property) return new NextResponse({ message: "Property not found" }, { status: 404 });

    return new NextResponse(JSON.stringify(property), { status: 200 });

}
