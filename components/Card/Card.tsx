import {Card as props} from "@/shared/types";
import Image from "next/image";
import Link from "next/link";

export const Card = ({
  type,
  title,
  image,
  href,
  styles,
  subtitle,
  cardId,
}: props) => {
  switch (type) {
    case "artist":
      return (
        <Link
          href={href}
          as={href}
          className="w-[180px] h-[260px] flex flex-col items-center gap-2 cursor-pointer bg-[#12101e] hover:bg-[#1c1931] rounded-[0.5rem]">
          <div className="w-[150px] pt-4 pb-6">
            <Image
              src={image}
              width={150}
              height={150}
              alt={title}
              className="rounded-[50%]"
              priority={true}
            />
            <h2 className="text-[1.2rem] w-auto pt-4">{title}</h2>
            <h3 className="text-[1rem] w-auto font-extralight pt-1">Artista</h3>
          </div>
        </Link>
      );
    case "playlist":
      return (
        <Link
          id={cardId}
          href={href}
          as={href}
          className="w-[180px] h-[260px] flex flex-col items-center gap-2 cursor-pointer bg-[#12101e] hover:bg-[#1c1931] rounded-[0.5rem]">
          <div className="w-[150px] pt-4 pb-6">
            <Image
              src={image}
              width={150}
              height={150}
              alt={title}
              className="rounded-[0.5rem]"
              priority={true}
            />
            <h2 className="text-[1.2rem] w-auto pt-4 truncate ">{title}</h2>
            {subtitle && (
              <h3 className="text-[1rem] w-auto font-extralight pt-1">
                {subtitle}
              </h3>
            )}
          </div>
        </Link>
      );
    default:
      return (
        <div>
          <Link
            href={href}
            className="flex gap-2 items-center w-full cursor-pointer hover:bg-[#1c1931] p-2 rounded-[0.5rem]">
            <Image src={image} width={40} height={40} alt={title} />
            <h2 className="truncate">{title}</h2>
          </Link>
        </div>
      );
  }
};
