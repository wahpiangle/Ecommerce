import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server";

export async function GET(req) {
	if (req.url.length < 0) return new Response("Error"); //! Required for build
	const listingType = req.nextUrl.searchParams.get('listingType')
	return await getProperties(listingType);
}

export async function POST(req) {
	const body = await req.json();
	const listingType = req.nextUrl.searchParams.get('listingType')
	const { dates, location, price, propertyType, facilities } = body;
	const properties = await getPropertiesWithFilter(dates, location, price, propertyType, facilities, listingType);
	return properties ? new NextResponse(JSON.stringify(properties), { status: 200 }) : new NextResponse('Error', { status: 400 });
}

//* in mongoDB listingType is saved as 'Rent' or 'Sale' but in the query it is 'rent' or 'purchase'
async function getProperties(listingType) {
	switch (listingType) {
		case 'rent':
			try {
				const properties = await prisma.property.findMany({
					where: {
						listingType: 'Rent'
					}
				});
				return new NextResponse(JSON.stringify(properties), { status: 200 });
			} catch (error) {
				console.log('Property Get Error (rent): ', error)
			}
		case 'purchase':
			try {
				const properties = await prisma.property.findMany({
					where: {
						listingType: 'Sale'
					}
				});
				return new NextResponse(JSON.stringify(properties), { status: 200 });
			} catch (error) {
				console.log('Property Get Error (purchase): ', error)
			}
		default:
			try {
				const properties = await prisma.property.findMany();
				return new NextResponse(JSON.stringify(properties), { status: 200 });
			} catch (error) {
				console.log('Property Get Error (default): ', error)
			}
	}

}

async function getPropertiesWithFilter(dates, location, price, propertyType, facilities, listingType) {
	try {
		const properties = await prisma.property.findMany({
			where: {
				AND: [
					{
						listingType: listingType === 'rent' ? 'Rent' : 'Sale'
					},
					{
						country: location === 'Anywhere' ? undefined : location
					},
					{
						rentalPrice: {
							gte: price[0],
							lte: price[1]
						}
					},
					{
						type: propertyType === '' ? undefined : propertyType
					},
					{
						facilities: facilities.length === 0 ? undefined : {hasEvery: facilities}
					},
					{
						startDate: dates[0] ? {gte: dates[0],} : undefined,
						endDate: dates[1] ? {lte: dates[1],} : undefined,
					}
				]
			}
		});
		console.log(properties)
		return new NextResponse(JSON.stringify(properties), { status: 200 });
	} catch (error) {
		console.log('Property Get Error (rent): ', error)
	}
}