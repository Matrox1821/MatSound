import Image from "next/image";
export const TracksComponent = ({tracksList}: any) => {
  if (tracksList)
    return (
      <ul className="flex flex-col gap-5 p-5 h-[35rem] overflow-y-scroll">
        {tracksList.map(
          ({track}: any) =>
            track && (
              <li key={track.id} className="flex items-center gap-4">
                <Image
                  src={track.album.images[0].url}
                  width={50}
                  height={50}
                  alt={track.album}
                />
                {track.name}
              </li>
            )
        )}
      </ul>
    );
};
