import {NextRequest, NextResponse} from "next/server";

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token");
  const trackId = request.nextUrl.searchParams.get("id");
  const track = await fetch(
    `https://api.spotify.com/v1/tracks?ids=${trackId}`,
    {
      headers: {Authorization: `Bearer ${token}`},
    }
  ).then((data) => data.json());
  return NextResponse.json(track);
}
