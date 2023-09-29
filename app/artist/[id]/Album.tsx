"use client";
import useSpotify from "@/hooks/useSpotify";
import useSWR from "swr";
import {Tracks} from "./Tracks";
import {getAlbumById} from "@/helpers/fetchData";

export const Album = ({id}: any) => {
  const spotifyApi = useSpotify();
  const token = spotifyApi.getAccessToken();
  const {
    data: album,
    error,
    isLoading,
  } = useSWR(`token=${token}&id=${id}`, getAlbumById);
  const ids = album?.tracks?.items?.map((track: any) => track.id).join(",");
  const idURI = encodeURIComponent(ids);
  return <Tracks ids={idURI} />;
};
