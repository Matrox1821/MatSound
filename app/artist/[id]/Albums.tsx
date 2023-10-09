"use client";
import useSpotify from "@/hooks/useSpotify";
import useSWR from "swr";
import Image from "next/image";
import {getArtistById} from "@/helpers/fetchData";
import {Card} from "@/components/Card";

export const Albums = ({id}: any) => {
  const spotifyApi = useSpotify();

  const token = spotifyApi.getAccessToken();

  const {data: artistAlbums} = useSWR(
    `/${id}/albums?token=${token}`,
    getArtistById
  );
  return (
    <section className="p-5 flex gap-4">
      {artistAlbums &&
        artistAlbums.items.map(
          (album: any) =>
            album?.images &&
            album.album_group === "album" && (
              <Card
                type="playlist"
                image={album.images[0].url}
                title={album?.name}
                href={`/album/${album.id}`}
                cardId={album.id}
                key={album.id}
                subtitle={album.release_date.slice(0, 4)}
              />
            )
        )}
    </section>
  );
};
