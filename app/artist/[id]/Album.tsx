"use client";
import useSpotify from "@/hooks/useSpotify";
import useSWR from "swr";
import {Tracks} from "./Tracks";
import {getAlbumById} from "@/helpers/fetchData";
import Image from "next/image";

export const Album = ({id}: any) => {
  const spotifyApi = useSpotify();
  const token = spotifyApi.getAccessToken();
  const {
    data: album,
    error,
    isLoading,
  } = useSWR(`id=${id}&token=${token}`, getAlbumById);
  const ids = album?.tracks?.items?.map((track: any) => track.id).join(",");
  const idURI = encodeURIComponent(ids);
  return (
    <div className="p-2">
      {album && (
        <div className="flex gap-4">
          {album.images && (
            <Image
              src={album.images[0].url}
              width={100}
              height={120}
              alt={album?.name}
              priority
            />
          )}
          <h1 className="text-[1.5rem]">{album?.name}</h1>
        </div>
      )}
      {/* <Tracks ids={idURI} /> */}
    </div>
  );
};
