import {NextRequest, NextResponse} from "next/server";

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token");
  const currentUserPlaylists = await fetch(
    `https://api.spotify.com/v1/me/playlists`,
    {
      headers: {Authorization: `Bearer ${token}`},
    }
  ).then((data) => data.json());

  return NextResponse.json(currentUserPlaylists);
}
