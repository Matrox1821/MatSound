"use client";
import {CardSkeleton} from "@/components/Card";
import {getArtistById} from "@/helpers/fetchData";
import useSpotify from "@/hooks/useSpotify";
import useSWR from "swr";
import Image from "next/image";
export const TopTracks = ({id}: any) => {
  const spotifyApi = useSpotify();
  const token = spotifyApi.getAccessToken();
  const {
    data: topTracks,
    error,
    isLoading,
  } = useSWR(`${id}/top?token=${token}`, getArtistById);

  if (isLoading)
    return (
      <ul>
        <li>
          <CardSkeleton type="playlist" />
        </li>
      </ul>
    );
  return (
    <section className="p-5 h-[45rem]">
      <ul className="flex flex-col gap-5 ">
        {topTracks.tracks.map(
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
    </section>
  );
};
