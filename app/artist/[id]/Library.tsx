"use client";
import useSpotify from "@/hooks/useSpotify";
import useSWR from "swr";
import {Album} from "./Album";
import {getArtistAlbums} from "@/helpers/fetchData";

export const Library = ({id}: any) => {
  const spotifyApi = useSpotify();
  const token = spotifyApi.getAccessToken();
  const {data: artistAlbums} = useSWR(
    `token=${token}&id=${id}`,
    getArtistAlbums
  );
  return <Album id={artistAlbums?.items[1].id} />;
};
