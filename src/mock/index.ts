import undeadMp3 from "./../assets/UNDEAD.mp3";
import undeadJpg from "./../assets/undead-yoasobi.jpg";

import { average } from "color.js";
const background = document.getElementById("background-color");
const image = document.getElementById("image");

const TracksWithoutId = [
  { song: undeadMp3, image: undeadJpg, name: "Undead", artist: "YOASOBI" },
];

export const TRACKS = TracksWithoutId.map((track) => {
  const { name, artist, image, ...rest } = track;
  const id = `${name}-${artist}`;
  console.log(average(image.src, { format: "hex" }));
  return { ...rest, name, artist, id, image };
});
