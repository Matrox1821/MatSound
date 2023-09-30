export const Skeleton = ({type}: {type: string}) => {
  switch (type) {
    case "artist":
      return (
        <div className="w-[180px] h-[260px] flex flex-col items-center gap-2 cursor-pointer bg-[#212122] rounded-[0.5rem]">
          <div className="w-[150px] pt-4 pb-6">
            <div className="relative space-y-3 overflow-hidden bg-[#4c4c4c] rounded-[50%] w-[150px] h-[150px] before:absolute before:w-[50px] before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:animate-[highlight_1.5s_infinite]"></div>
            <div className="relative overflow-hidden bg-[#4c4c4c] mt-4 w-auto h-[1rem] rounded-[0.2rem] before:absolute before:w-[50px] before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:animate-[highlight_1.5s_infinite]"></div>
            <div className="relative overflow-hidden bg-[#4c4c4c] mt-4 w-auto h-[1rem] rounded-[0.2rem] before:absolute before:w-[50px] before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:animate-[highlight_1.5s_infinite]"></div>
          </div>
        </div>
      );
    case "playlist":
      return (
        <div className="w-[180px] h-[260px] flex flex-col items-center gap-2 cursor-pointer bg-[#212122] rounded-[0.5rem]">
          <div className="w-[150px] pt-4 pb-6">
            <div className="relative space-y-3 overflow-hidden bg-[#4c4c4c] rounded-[0.5rem] w-[150px] h-[150px] before:absolute before:w-[50px] before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:animate-[highlight_1.5s_infinite]"></div>
            <div className="relative overflow-hidden bg-[#4c4c4c] mt-4 w-auto h-[1rem] rounded-[0.2rem] before:absolute before:w-[50px] before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:animate-[highlight_1.5s_infinite]"></div>
            <div className="relative overflow-hidden bg-[#4c4c4c] mt-4 w-auto h-[1rem] rounded-[0.2rem] before:absolute before:w-[50px] before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:animate-[highlight_1.5s_infinite]"></div>
          </div>
        </div>
      );
    default:
      return <div></div>;
  }
};
