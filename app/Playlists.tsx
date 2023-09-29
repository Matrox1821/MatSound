"use client";
import useSpotify from "@/hooks/useSpotify";
import useSWR from "swr";
import Card from "@/components/Card";
import {getCurrentUserPlaylists} from "@/helpers/fetchData";
import {IoChevronForwardSharp} from "react-icons/io5";
import {Navigation, Pagination, Scrollbar, A11y} from "swiper/modules";
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {SwiperButtons} from "@/components/SwiperButtons";

export const Playlists = () => {
  const swiper = useSwiper();
  const spotifyApi = useSpotify();
  const token = spotifyApi.getAccessToken();
  const {
    data: playlists,
    error,
    isLoading,
  } = useSWR(`?token=${token}`, getCurrentUserPlaylists);

  if (isLoading)
    return (
      <>
        <h2 className="text-[1.5rem] font-bold pt-5 pb-5">Tus Playlists</h2>
        <div className="flex justify-center items-center h-full">
          <span className="loading loading-spinner text-[#282443] w-[2rem] h-[2rem]"></span>
        </div>
      </>
    );

  if (error) return <div>failed to load</div>;

  return (
    <>
      <h2 className="text-[1.5rem] font-bold pt-5 pb-5">Tus Playlists</h2>
      <Swiper className="swiper" spaceBetween={50} slidesPerView={3}>
        <SwiperButtons />
        {playlists.items.map((playlist: any, i: any) => (
          <SwiperSlide key={playlist.id}>
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
    </>
  );
};
