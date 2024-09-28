import { ALBUMS, ARTISTS, TRACKS } from "../mock";
import type { AlbumProps, ArtistProps, TrackProps } from "./types";

export function hexToRgb(hex?: string): {
  r: number;
  g: number;
  b: number;
} {
  if (!hex) return { r: 0, g: 0, b: 0 };
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return { r: 0, g: 0, b: 0 };
  return {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  };
}

export const isTrack = (x: any): x is TrackProps => TRACKS.includes(x);
export const isAlbum = (x: any): x is AlbumProps => ALBUMS.includes(x);
export const isArtist = (x: any): x is ArtistProps => ARTISTS.includes(x);
