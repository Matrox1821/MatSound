import React from "react";
import {Modal} from "@/shared/types";
const Modal = ({title, subtitle, children}: Modal) => {
  return (
    <div
      id="modal"
      className="absolute w-screen h-screen top-0 left-0 flex flex-col items-center justify-center md:justify-evenly bg-[#0b0d1243] backdrop-blur-sm">
      <div className=" bg-[#131a3a] w-screen h-screen  flex flex-col items-center justify-center md:w-[50vw] md:h-[30vh] md:rounded-[1.5rem] md:justify-evenly xl:w-[35vw]">
        {title && (
          <div className="flex flex-col items-center">
            <h2 className="text-[2rem] md:pb-5 md:text-[2rem] text-[#345af3] font-medium">
              {title}
            </h2>
            {subtitle && (
              <h3 className="text-[1.2rem] md:text-[1.2rem] text-[#345af3] font-medium">
                {subtitle}
              </h3>
            )}
            {children}
          </div>
        )}
      </div>
    </div>
  );
};
export default Modal;
