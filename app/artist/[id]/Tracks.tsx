"use client";
import {getTrakById} from "@/helpers/fetchData";
import useSpotify from "@/hooks/useSpotify";
import useSWR from "swr";
import Image from "next/image";
import {CardSkeleton} from "@/components/Card";
export const Tracks = ({ids}: any) => {
  const spotifyApi = useSpotify();
  const token = spotifyApi.getAccessToken();
  const {
    data: tracks,
    error,
    isLoading,
  } = useSWR(`token=${token}&id=${ids}`, getTrakById);

  if (isLoading)
    return (
      <ul>
        <li>
          <CardSkeleton type="playlist" />
        </li>
      </ul>
    );
  return (
    <ul className="flex flex-col gap-5 p-5 h-[34rem]">
      {tracks.tracks.map(
        (track: any) =>
          track && (
            <li key={track.id} className="flex items-center gap-4">
              <Image
                src={track.album.images[0].url}
                width={50}
                height={50}
                alt={track.album}
              />
              {track.name}
            </li>
          )
      )}
    </ul>
  );
};
