import {
  IoAdd,
  IoHomeOutline,
  IoLogOutOutline,
  IoPersonCircleSharp,
  IoSearchOutline,
} from "react-icons/io5";
import {MdOutlineLibraryMusic} from "react-icons/md";

export const icons = {
  header: {
    sessionClosed: (
      <IoPersonCircleSharp className="w-[45px] h-[45px] btn-circle" />
    ),
    home: <IoHomeOutline className="text-[1.5rem]" />,
    libraryMusic: <MdOutlineLibraryMusic className="text-[1.5rem]" />,
    signOut: <IoLogOutOutline className="text-[1.5rem] " />,
    search: <IoSearchOutline className="text-[1.5rem] text-[#322e52]" />,
  },
  sidebar: {
    home: <IoHomeOutline className="text-[2rem]" />,
    search: <IoSearchOutline className="text-[2rem]" />,
    libraryMusic: <MdOutlineLibraryMusic />,
    plus: <IoAdd />,
  },
};
