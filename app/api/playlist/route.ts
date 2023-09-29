import {NextRequest, NextResponse} from "next/server";

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token");
  const playlistId = request.nextUrl.searchParams.get("id");
  const playlist = await fetch(
    `https://api.spotify.com/v1/playlists/${playlistId}`,
    {headers: {Authorization: `Bearer ${token}`}}
  ).then((data) => data.json());
  return NextResponse.json(playlist);
}
/* BQAw_0IJbm0BtWY1-kMUxP3ReJhz4lE1XQM2YDk0hek1JmHOgNiS6st4WnJVFNEIo4vkuQZx66LO1Rir5P3tzNRWRGgAwL60RaebVURPbnDVen51Lx3K6fUbb4ccJbQYwVyNWpllGsu9qCLsP5Wxi7BoYFXpEQmTAAImSc0xlncasXpVVuOarqCTUp7rL9c6TBN9fkYfp5OUh4DcHK-wWTqHYB-sEqeYdXx61z1Wj7saneKKQ7gkno2buO1O-6nW */
/* 3cEYpjA9oz9GiPac4AsH4n */
