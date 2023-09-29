import Button from "../Button";
import CustomLink from "../CustomLink";
import {SidebarPlaylists} from "./SidebarPlaylists";
import {icons} from "@/constants/icons";

export const Sidebar = () => {
  return (
    <aside className="hidden sm:flex flex-col p-4 bg-[#0b0d12] w-[20vw] ">
      <header className="flex flex-col">
        <CustomLink
          styles="flex items-center rounded-[5px] text-[#345af3] sm:hover:text-[#617ff5] sm:w-full sm:h-8 sm:px-3 sm:py-5 gap-3 cursor-pointer justify-center"
          link="/"
          title="Inicio"
          titleStyles="hidden sm:block text-[20px]"
          icon={icons.sidebar.home}
        />
        <Button
          styles="flex items-center rounded-[5px] text-[#345af3] sm:hover:text-[#617ff5] sm:w-full sm:h-8 sm:px-3 sm:py-5 gap-3 justify-center"
          title="Buscar"
          titleStyles="hidden sm:block text-[20px]"
          icon={icons.sidebar.search}
        />
      </header>
      <hr className="hidden sm:block border-t-[1px] border-[#b76565]" />
      <section className=" flex flex-col bg-[#0b0d12]  gap-1 sm:h-full">
        <div className="flex items-center justify-center">
          <Button
            styles="flex items-center text-[#345af3] sm:hover:bg-[#22272e] sm:hover:text-[#617ff5] rounded-[50%] sm:w-auto h-8 text-[2rem]"
            icon={icons.sidebar.libraryMusic}
          />
          <CustomLink
            styles="flex items-center justify-between rounded-[5px] text-[#345af3] hover:text-[#617ff5] sm:w-full h-8 sm:px-3 sm:py-5 text-[20px] cursor-pointer hover:button"
            link="/newPage"
            title="Tu biblioteca"
            titleStyles="hidden sm:block"
          />
          <Button
            styles="hidden sm:flex items-center text-[#345af3] hover:bg-[#22272e] rounded-[50%] w-auto h-8 px-2 py-5 text-[20px] gap-3"
            icon={icons.sidebar.plus}
          />
        </div>

        <div className="hidden sm:flex rounded-[0.5rem] h-[90%]">
          <SidebarPlaylists />
        </div>
      </section>
    </aside>
  );
};
