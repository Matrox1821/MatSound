import useColorThief from "use-color-thief";
import { useEffect } from "react";
interface BackgroundColorProps {
  image: ImageMetadata;
}
export function BackgroundColor({ image }: BackgroundColorProps) {
  const { color, palette } = useColorThief(image.src, {
    format: "hex",
    colorCount: 10,
    quality: 10,
  });
  useEffect(() => {
    console.log("Color:", color);
    console.log("Palette:", palette);
  }, [palette, color]);
  return <div className="color-">{color}</div>;
}
