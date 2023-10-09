"use client";
import useSpotify from "@/hooks/useSpotify";
import useSWR from "swr";
import {Card, CardSkeleton} from "@/components/Card";
import {getCurrentUserPlaylists} from "@/helpers/fetchData";
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {SwiperButtons} from "@/components/SwiperButtons";

export const Playlists = () => {
  const spotifyApi = useSpotify();
  const token = spotifyApi.getAccessToken();
  const {
    data: playlists,
    error,
    isLoading,
  } = useSWR(`?token=${token}`, getCurrentUserPlaylists);
  if (isLoading || !token)
    return (
      <>
        <h2 className="text-[1.5rem] font-bold pt-5 pb-5">Tus Playlists</h2>
        <ul className="flex gap-3 overflow-hidden">
          <li>
            <CardSkeleton type="playlist" />
          </li>
          <li>
            <CardSkeleton type="playlist" />
          </li>
          <li>
            <CardSkeleton type="playlist" />
          </li>
          <li>
            <CardSkeleton type="playlist" />
          </li>
          <li>
            <CardSkeleton type="playlist" />
          </li>
        </ul>
      </>
    );

  if (error) return <div>failed to load</div>;

  return (
    <div>
      <Swiper
        slidesPerView="auto"
        className="!flex flex-col-reverse gap-2 m-12">
        <div className="flex items-center justify-between">
          <h2 className="text-[1.5rem] font-bold">Tus Playlists</h2>
          <SwiperButtons />
        </div>
        {playlists.items.map((playlist: any, i: any) => (
          <SwiperSlide key={playlist.id} className="!w-auto !mr-4 ">
            <Card
              type="playlist"
              title={playlist.name}
              image={playlist.images[0].url ?? playlist.images[0].url}
              href={`/playlist/${playlist.id}`}
              cardId={`playlist-${i}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
