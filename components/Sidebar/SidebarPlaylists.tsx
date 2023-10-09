"use client";
import useSpotify from "@/hooks/useSpotify";
import {Card} from "@/components/Card";
import useSWR from "swr";
import {getCurrentUserPlaylists} from "@/helpers/fetchData";

export const SidebarPlaylists = () => {
  const spotifyApi = useSpotify();
  const token = spotifyApi.getAccessToken();
  const {
    data: playlists,
    error,
    isLoading,
  } = useSWR(`?token=${token}`, getCurrentUserPlaylists);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>failed to load</div>;
  return (
    <ul className="overflow-y-scroll flex flex-col gap-3 w-full p-2 h-[35rem]">
      {playlists.items.map((playlist: any) => (
        <Card
          key={playlist.id}
          title={playlist.name}
          image={playlist.images[0].url}
          href={`/playlist/${playlist.id}`}
        />
      ))}
    </ul>
  );
};
