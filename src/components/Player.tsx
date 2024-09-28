import { isAPropagatingComponent } from "astro/runtime/server/render/astro/factory.js";
import { Fragment, useEffect, useRef, useState, type RefObject } from "react";
import { IoPlay } from "react-icons/io5";
import { IoIosPause } from "react-icons/io";
import { godIshMp3 } from "./../assets";
import { usePlayerStore } from "../assets/store/playerStore";
import { usePalette, type PaletteColors } from "react-palette";
import { hexToRgb } from "../helpers";
import { BiBrightness } from "react-icons/bi";

function ProgressBar({ audio }: { audio: RefObject<HTMLAudioElement> }) {
  const [currentTime, setCurrentTime] = useState(0);
  useEffect(() => {
    if (audio.current) {
      audio.current.addEventListener("timeupdate", handleTimeUpdate);
      return () => {
        audio.current?.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }
  }, [currentTime]);

  const handleTimeUpdate = () => {
    setCurrentTime(audio.current ? audio.current.currentTime : 0);
  };

  const progress =
    audio.current && currentTime
      ? (currentTime * 100) / audio.current.duration
      : 0;

  return (
    <div className="w-[calc(100%-16px)] h-[3px] bg-black/50 rounded-sm">
      <div
        style={{
          width: progress,
        }}
        className="bg-white h-[3px]"
      />
    </div>
  );
}
function CurrentTrack({
  image,
  title,
  artist,
}: {
  image: ImageMetadata;
  title: string;
  artist: string;
}) {
  return (
    <div className="flex justify-center items-center w-full">
      <img src={image.src} alt={title} className="w-10 h-10 rounded-md" />
      <div className="flex flex-col p-2 justify-center items-start w-full">
        <h3 className="font-semibold text-base">{title}</h3>
        <span className="font-normal text-xs">{artist}</span>
      </div>
    </div>
  );
}
function Background({
  image,
  isActive,
  children,
}: {
  image?: string;
  isActive: boolean;
  children: JSX.Element;
}) {
  const { data } = usePalette(image ? image : "");

  let color = hexToRgb(data.darkVibrant);
  const rgbColor = `${color.r},${color.g},${color.b}`;
  return (
    <div
      style={{
        backgroundColor: rgbColor ? `rgba(${rgbColor},1)` : `rgba(0,0,0,1)`,
        display: isActive ? "flex" : "none",
      }}
      className="fixed bottom-16 mx-4 rounded-lg flex-col justify-center items-center "
    >
      {children}
    </div>
  );
}

export function Player() {
  const { isPlaying, setIsPlaying, currentMusic, isActive } = usePlayerStore(
    (state) => state
  );

  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (!audioRef.current) return;
    isPlaying ? audioRef.current.play() : audioRef.current.pause();
  }, [isPlaying]);

  useEffect(() => {
    if (!currentMusic || !audioRef.current) return;
    const { playlist, track, tracks } = currentMusic;
    if (track) {
      audioRef.current.src = track.song;
      audioRef.current.volume = 0.1;
      audioRef.current.play();
    }
  }, [currentMusic]);

  const handleClick = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <Background image={currentMusic.track?.image.src} isActive={isActive}>
      <Fragment>
        <div className="flex z-50 h-14 w-[calc(100vw-32px)] justify-between items-center p-2">
          {currentMusic.track && (
            <CurrentTrack
              image={currentMusic.track.image}
              title={currentMusic.track.name}
              artist={currentMusic.track.artist}
            />
          )}
          <div className="flex justify-center items-center">
            <span className="hidden">Vol</span>
            <button
              className="h-10 w-10 flex justify-center items-center rounded-full"
              onClick={handleClick}
            >
              {isPlaying ? (
                <IoIosPause className="h-7 w-7 text-[rgba(var(--content),1)]" />
              ) : (
                <IoPlay className="h-7 w-7 text-[rgba(var(--content),1)] ml-1" />
              )}
            </button>
          </div>
          <audio ref={audioRef} />
        </div>
        {currentMusic.track && <ProgressBar audio={audioRef} />}
      </Fragment>
    </Background>
  );
}
