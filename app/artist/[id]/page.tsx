"use client";
import useSpotify from "@/hooks/useSpotify";
import useSWR from "swr";
import {Albums} from "./Albums";
import {getArtistById} from "@/helpers/fetchData";
import Image from "next/image";
import {TopTracks} from "./TopTracks";

export default function Page({params}: any) {
  const spotifyApi = useSpotify();
  const token = spotifyApi.getAccessToken();
  const {
    data: artist,
    error,
    isLoading,
  } = useSWR(`${params.id}?token=${token}`, getArtistById);

  if (artist)
    return (
      <article>
        <header className="h-[18rem] w-screen">
          <Image
            className="aspect-auto h-[18rem] object-cover "
            src={artist.images[0].url}
            width={1080}
            height={720}
            alt={artist?.name}
            priority
          />
          <h2 className="pl-2 z-20 relative text-white text-[4rem] h-[4rem] bottom-[5rem] font-bold leading-none	">
            {artist?.name}
          </h2>
          <div className="relative h-[18rem] bottom-[22rem]  bg-gradient-to-t from-[#101010] z-10"></div>
        </header>
        <TopTracks id={params.id} />
        <Albums id={params.id} />
      </article>
    );
  if (isLoading) return <>Loading</>;
}
