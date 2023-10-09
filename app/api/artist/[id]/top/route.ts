import {NextRequest, NextResponse} from "next/server";

export async function GET(request: NextRequest, {params}: any) {
  const token = request.nextUrl.searchParams.get("token");
  const artistId = params.id;
  const topTracks = await fetch(
    `https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=es`,
    {
      headers: {Authorization: `Bearer ${token}`},
    }
  ).then((data) => data.json());
  return NextResponse.json(topTracks);
}
