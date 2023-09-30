"use client";
import {useSession} from "next-auth/react";
import useSpotify from "@/hooks/useSpotify";
import {useEffect, useState} from "react";
import {Card} from "@/components/Card";
import useSWR from "swr";
import {getUserPlaylists} from "@/helpers/fetchData";

export const SidebarPlaylists = () => {
  const {data: session} = useSession();
  const spotifyApi = useSpotify();
  const [user, setUser] = useState<SpotifyApi.CurrentUsersProfileResponse>();

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getMe().then((data) => setUser(data.body));
    }
  }, [session, spotifyApi]);

  const token = spotifyApi.getAccessToken();
  const {
    data: playlists,
    error,
    isLoading,
  } = useSWR(`${user?.id}/playlists?token=${token}`, getUserPlaylists);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>failed to load</div>;
  return (
    <ul className="overflow-y-scroll flex flex-col gap-3 w-full p-2 h-[35rem]">
      {!playlists || playlists.error ? (
        <p>Loading...</p>
      ) : (
        playlists.items.map((playlist: any) => (
          <Card
            key={playlist.id}
            title={playlist.name}
            image={playlist.images[0].url}
            href={`/playlist/${playlist.id}`}
          />
        ))
      )}
    </ul>
  );
};
