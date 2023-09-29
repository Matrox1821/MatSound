"use client";
import {getProviders, signIn, useSession} from "next-auth/react";
import Button from "./Button";
import {BsSpotify} from "react-icons/bs";

const spotifyLogo = <BsSpotify />;
export default function LoginButton() {
  return (
    <Button
      styles="text-[1.5rem] text-[#adbdff] font-medium bg-[#345af3] px-2 rounded-[1.5rem] flex items-center justify-center mt-8 gap-2"
      onClick={async () => {
        const providers = await getProviders();
        signIn(providers?.spotify.id, {callbackUrl: "/"});
      }}
      title="Autorizar"
      icon={spotifyLogo}></Button>
  );
}
