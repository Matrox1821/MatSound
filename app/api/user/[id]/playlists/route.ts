import {NextRequest, NextResponse} from "next/server";

export async function GET(request: NextRequest, {params}: any) {
  const userId = params.id;
  const token = request.nextUrl.searchParams.get("token");
  const userPlaylists = await fetch(
    `https://api.spotify.com/v1/users/${userId}/playlists`,
    {
      headers: {Authorization: `Bearer ${token}`},
    }
  ).then((data) => data.json());

  return NextResponse.json(userPlaylists);
}
