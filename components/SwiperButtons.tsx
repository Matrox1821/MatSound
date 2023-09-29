import {useSwiper} from "swiper/react";
import Button from "./Button";
import {IoChevronForwardSharp} from "react-icons/io5";

const arrow = <IoChevronForwardSharp />;

export const SwiperButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flex gap-2">
      <Button
        styles="text-[#345af3] rotate-180 bg-[#171b25]  hover:bg-[#22272e] rounded-[50%] h-8 w-8 flex items-center justify-center"
        icon={arrow}
        onClick={() => swiper.slidePrev()}
      />
      <Button
        styles="text-[#345af3] bg-[#171b25] hover:bg-[#22272e] rounded-[50%] h-8 w-8 flex items-center justify-center"
        icon={arrow}
        onClick={() => swiper.slideNext()}
      />
    </div>
  );
};
