"use client";
import Button from "../Button";
import {IoChevronForwardSharp} from "react-icons/io5";
import {UserSession} from "./UserSession";
import {useEffect, useState} from "react";
const Arrow = <IoChevronForwardSharp />;
export const Header = () => {
  const [isHeaderInTop, setIsHeaderInTop] = useState(true);

  const handleScroll = () => {
    const articleElement = document.getElementById("main_container");
    if (articleElement) setIsHeaderInTop(articleElement.scrollTop <= 100);
  };
  useEffect(() => {
    const articleElement = document.getElementById("main_container");
    if (!articleElement) return;
    articleElement.addEventListener("scroll", handleScroll);
    return () => {
      articleElement.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`z-50 flex justify-between items-center h-[4rem] p-4 ${
        isHeaderInTop ? "bg-transparent" : "bg-[#101010]"
      } fixed w-full ease-in transition-colors duration-[300ms]`}>
      <nav className="flex gap-2">
        <Button
          styles="text-[#345af3] rotate-180 bg-[#171b25]  hover:bg-[#22272e] rounded-[50%] h-8 w-8 flex items-center justify-center"
          icon={Arrow}
        />
        <Button
          styles="text-[#345af3] bg-[#171b25] hover:bg-[#22272e] rounded-[50%] h-8 w-8 flex items-center justify-center"
          icon={Arrow}
        />
      </nav>
      <UserSession />
    </header>
  );
};
