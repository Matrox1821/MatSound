import {NextRequest, NextResponse} from "next/server";

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token");

  const {artists} = await fetch(
    `https://api.spotify.com/v1/me/following?type=artist`,
    {
      headers: {Authorization: `Bearer ${token}`},
    }
  ).then((data) => data.json());
  if (!artists) return NextResponse.json({error: "Fetching Error"});

  return NextResponse.json(artists);
}
