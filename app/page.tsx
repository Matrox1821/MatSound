import {Artists} from "./Artists";
import {Playlists} from "./Playlists";

export default function Home() {
  return (
    <article
      className="p-4 pt-[4rem] h-full overflow-y-auto"
      id="container_body">
      <Artists />
      <Playlists />
      <Playlists />
    </article>
  );
}
