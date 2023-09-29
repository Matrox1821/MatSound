import {NextRequest, NextResponse} from "next/server";

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token");
  const albumId = request.nextUrl.searchParams.get("id");
  const album = await fetch(`https://api.spotify.com/v1/albums/${albumId}`, {
    headers: {Authorization: `Bearer ${token}`},
  }).then((data) => data.json());
  return NextResponse.json(album);
}
