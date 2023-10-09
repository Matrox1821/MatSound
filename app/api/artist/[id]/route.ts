import {NextRequest, NextResponse} from "next/server";

export async function GET(request: NextRequest, {params}: any) {
  const artistId = params.id;
  const token = request.nextUrl.searchParams.get("token");
  const artist = await fetch(
    `https://api.spotify.com/v1/artists/${artistId}/`,
    {
      headers: {Authorization: `Bearer ${token}`},
    }
  ).then((data) => data.json());

  return NextResponse.json(artist);
}
