"use client";
import React, {useState} from "react";
import Button from "../Button";
import Image from "next/image";
import {signOut, useSession} from "next-auth/react";
import CustomLink from "../CustomLink";
import {icons} from "@/constants/icons";
import {Search} from "../Search";

export const UserSession = () => {
  const {data: session} = useSession();
  const [isOpenSearch, setIsOpenSearch] = useState<boolean>(false);

  const handleSearch = () => {
    setIsOpenSearch(!isOpenSearch);
  };
  if (session) {
    return (
      <nav className="flex gap-2">
        <Search isOpen={isOpenSearch} />
        <Button icon={icons.header.search} onClick={handleSearch} />
        <div className="dropdown dropdown-end">
          <figure className="btn-circle cursor-pointer flex gap-6 justify-center items-center">
            <Image
              tabIndex={0}
              src={session.user?.image || ""}
              width={40}
              height={40}
              alt={session.user?.name || ""}
              className="rounded-[50%]"
            />
          </figure>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <CustomLink title="Home" link="/" icon={icons.header.home} />
            </li>
            <li>
              <CustomLink
                title="Playlists"
                link="/playlist"
                icon={icons.header.libraryMusic}
              />
            </li>
            <li>
              <Button
                onClick={() =>
                  signOut({callbackUrl: "http://localhost:3000/login"})
                }
                title="Cerrar Sesión"
                icon={icons.header.signOut}
              />
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  return (
    <nav>
      <CustomLink title="Iniciar Sesión" link="/login" />
    </nav>
  );
};
