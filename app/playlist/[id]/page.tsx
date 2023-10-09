"use client";
import {getPlaylistById} from "@/helpers/fetchData";
import useSpotify from "@/hooks/useSpotify";
import Image from "next/image";
import useSWR from "swr";

export default function Page({params}: any) {
  const spotifyApi = useSpotify();
  const token = spotifyApi.getAccessToken();
  const {
    data: playlist,
    error,
    isLoading,
  } = useSWR(`token=${token}&id=${params.id}`, getPlaylistById);
  if (playlist && token)
    return (
      <>
        <div className="flex gap-4">
          <Image
            src={playlist?.images[0].url}
            width={150}
            height={150}
            alt={playlist?.name}
          />
          <h1 className="text-[1.5rem]">{playlist?.name}</h1>
        </div>
        <ul className="flex flex-col gap-5 p-5 h-[35rem] overflow-y-scroll">
          {playlist?.tracks.items.map(({track}: any) => (
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
    );
  return <p>Loading...</p>;
}
