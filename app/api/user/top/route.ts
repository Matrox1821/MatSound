import {NextRequest, NextResponse} from "next/server";

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token");
  const type = request.nextUrl.searchParams.get("type");

  const topItems = await fetch(`https://api.spotify.com/v1/me/top/${type}`, {
    headers: {Authorization: `Bearer ${token}`},
  }).then((data) => data.json());

  return NextResponse.json(topItems);
}
