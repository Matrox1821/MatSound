import { IoPlay } from "react-icons/io5";
import { IoIosPause } from "react-icons/io";

import { usePlayerStore } from "../assets/store/playerStore";
import type { TrackProps } from "../helpers/types";

export function PlayButton({ song }: { song: TrackProps }) {
  const {
    isPlaying,
    currentMusic,
    setIsPlaying,
    setCurrentMusic,
    setIsActive,
  } = usePlayerStore((state) => state);

  const isPlayingComponent = isPlaying && currentMusic.track?.id === song.id;

  const songId = song.id;

  const handleClick = () => {
    if (isPlayingComponent) {
      setIsPlaying(false);
      return;
    }
    fetch(`/api/get-info-track/${songId}.json`)
      .then((res) => res.json())
      .then((data) => {
        const { track } = data;
        setIsPlaying(true);
        setCurrentMusic({ track });
        setIsActive(true);
      });
  };

  return (
    <button
      onClick={handleClick}
      className="bg-[rgba(var(--accent),1)] w-10 h-10 rounded-full flex justify-center items-center"
    >
      {isPlayingComponent ? (
        <IoIosPause className="w-6 h-6 text-[rgba(var(--bg),1)]" />
      ) : (
        <IoPlay className="w-6 h-6 text-[rgba(var(--bg),1)] ml-[3px]" />
      )}
    </button>
  );
}
