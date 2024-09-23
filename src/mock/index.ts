import undeadMp3 from "./../assets/UNDEAD.mp3";
import undeadJpg from "./../assets/undead-yoasobi.jpg";
const TracksWithoutId = [
  { song: undeadMp3, image: undeadJpg, name: "Undead", artist: "YOASOBI" },
];

export const TRACKS = TracksWithoutId.map((track) => {
  const { name, artist, ...rest } = track;
  const id = `${name}-${artist}`;
  return { ...rest, name, artist, id };
});
