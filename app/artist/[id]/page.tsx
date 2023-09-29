"use client";
import useSpotify from "@/hooks/useSpotify";
import useSWR from "swr";
import {Library} from "./Library";
import {getArtistById} from "@/helpers/fetchData";

export default function Page({params}: any) {
  const spotifyApi = useSpotify();
  const token = spotifyApi.getAccessToken();
  const {
    data: artist,
    error,
    isLoading,
  } = useSWR(`token=${token}&id=${params.id}`, getArtistById);

  return (
    <>
      <Library id={params.id} />
      {/* {artist && token ? (
        <>
          <div className="flex gap-4">
            <Image
              src={artist?.images[0].url}
              width={150}
              height={150}
              alt={artist?.name}
            />
            <h1 className="text-[1.5rem]">{artist?.name}</h1>
          </div>
          <ul className="flex flex-col gap-5 p-5 h-[35rem] overflow-y-scroll">
            {artist?.tracks.items.map(({track}: any) => (
              <li key={track.id} className="flex items-center gap-4">
                <Image
                  src={track.album.images[0].url}
                  width={50}
                  height={50}
                  alt={track.album}
                />
                {track.name}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>Loading...</p>
      )} */}
    </>
  );
}
