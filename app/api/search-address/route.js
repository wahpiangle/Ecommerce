import { NextResponse } from "next/server";

const BASE_URL = "https://api.mapbox.com/search/searchbox/v1/suggest"

export async function GET(request){

    const { searchParams } = new URL(request.url);

    const searchText = searchParams.get('q');

    const res = await fetch(BASE_URL + '?q=' + searchText + '?language=en&limit=6&access_token=' + process.env.MAPBOX_TOKEN + '&session_token=' + process.env.MAPBOX_SESSION, {
        headers:{
            'Content-Type': 'application/json'
        }
    });

    const searchResult = await res.json();
    return NextResponse.json(
        {
            data: searchResult
        }
    );
}