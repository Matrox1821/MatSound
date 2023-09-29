import Button from "../Button";
import {IoChevronForwardSharp} from "react-icons/io5";
import {UserSession} from "./UserSession";

const arrow = <IoChevronForwardSharp />;

export const Header = () => {
  return (
    <header className="flex justify-between items-center h-[4rem] p-4">
      <nav className="flex gap-2">
        <Button
          styles="text-[#345af3] rotate-180 bg-[#171b25]  hover:bg-[#22272e] rounded-[50%] h-8 w-8 flex items-center justify-center"
          icon={arrow}
        />
        <Button
          styles="text-[#345af3] bg-[#171b25] hover:bg-[#22272e] rounded-[50%] h-8 w-8 flex items-center justify-center"
          icon={arrow}
        />
      </nav>
      <UserSession />
    </header>
  );
};
