import {icons} from "@/constants/icons";
import Button from "./Button";

export const Search = ({isOpen}: {isOpen: boolean}) => {
  return (
    <div
      className={`${
        isOpen ? "inline-flex" : "hidden"
      }  absolute left-0 top-0  z-10 pl-4 p-2 bg-[#101010] w-full gap-4`}>
      <Button icon={icons.header.search} styles="" />
      <input
        type="search"
        placeholder="Buscar"
        name="q"
        className="input input-bordered input-primary bg-[#201d2a] w-[80vw] "
      />
    </div>
  );
};
