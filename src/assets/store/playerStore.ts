import { create } from "zustand";
import type { AlbumProps, TrackProps } from "../../helpers/types";

interface CurrentMusic {
  playlist?: null | AlbumProps;
  track: null | TrackProps;
  tracks?: [] | TrackProps[];
}
interface PlayerState {
  isPlaying: boolean;
  currentMusic: CurrentMusic;
  isActive: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
  setCurrentMusic: (currentMusic: CurrentMusic) => void;
  setIsActive: (isActive: boolean) => void;
}

export const usePlayerStore = create<PlayerState>((set) => ({
  isPlaying: false,
  currentMusic: { playlist: null, track: null, tracks: [] },
  isActive: false,
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setCurrentMusic: (currentMusic) => set({ currentMusic }),
  setIsActive: (isActive) => set({ isActive }),
}));
