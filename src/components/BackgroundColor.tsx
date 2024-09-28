import type { ImageMetadata } from "astro";
import { usePalette } from "react-palette";
import { hexToRgb } from "../helpers";

interface BackgroundColorProps {
  image: ImageMetadata;
}

export function BackgroundColor({ image }: BackgroundColorProps) {
  const { data, loading, error } = usePalette(image.src);
  let color = hexToRgb(data.lightMuted);
  const rgbColor = `${color.r},${color.g},${color.b}`;
  return (
    <div
      style={{
        background: `linear-gradient(to bottom,rgba(${rgbColor},0.7) 10%,#040b17 )`,
        top: "0",
        height: "50vh",
      }}
      className="absolute z-0 w-screen left-0"
    />
  );
}
