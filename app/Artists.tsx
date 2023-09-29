"use client";
import useSpotify from "@/hooks/useSpotify";
import useSWR from "swr";
import Card from "@/components/Card";
import {getArtistsFollowing} from "@/helpers/fetchData";

export const Artists = () => {
  const spotifyApi = useSpotify();
  const token = spotifyApi.getAccessToken();
  const {
    data: artists,
    error,
    isLoading,
  } = useSWR(`token=${token}`, getArtistsFollowing);

  if (isLoading)
    return (
      <ul>
        <Card type="artist-skeleton" title="" image="" href="" />
      </ul>
    );
  if (error) return <div>failed to load</div>;
  return (
    <>
      <h1 className="text-[1.5rem] font-bold pb-5">Artistas recientes</h1>
      <ul className="flex gap-4 overflow-auto">
        {artists && token ? (
          artists.items.map((artist: any) => (
            <Card
              type="artist"
              title={artist.name}
              image={artist.images[0].url ?? artist.images[0].url}
              href={`/artist/${artist.id}`}
              key={artist.id}
            />
          ))
        ) : (
          <span className="loading loading-spinner text-[#282443] "></span>
        )}
      </ul>
    </>
  );
};
