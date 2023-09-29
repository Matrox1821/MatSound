"use client";
import {getTraksById} from "@/helpers/fetchData";
import useSpotify from "@/hooks/useSpotify";
import useSWR from "swr";

export const Tracks = ({ids}: any) => {
  const spotifyApi = useSpotify();
  const token = spotifyApi.getAccessToken();
  const {
    data: tracks,
    error,
    isLoading,
  } = useSWR(`token=${token}&id=${ids}`, getTraksById);
  console.log(tracks);
  return <div>Tracks</div>;
};
