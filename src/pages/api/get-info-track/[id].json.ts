import Track from "../../../components/Track.astro";
import { TRACKS } from "../../../mock";
import type { APIContext } from "astro";
export async function GET({ params }: APIContext) {
  const id = params.id;
  const [track, _] = TRACKS.filter((track) => track.id === id);
  return new Response(JSON.stringify({ track }), {
    headers: { "content-type": "application/json" },
  });
}
export function getStaticPaths() {
  return TRACKS.map((track) => {
    return {
      params: {
        id: track.id,
      },
    };
  });
}
