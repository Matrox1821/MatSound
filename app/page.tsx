import {Artists} from "./Artists";
import {Playlists} from "./Playlists";

export default function Home() {
  return (
    <article className="p-4 height-header overflow-y-auto">
      <Artists />

      <Playlists />
      <Playlists />
    </article>
  );
}
