import React from "react";

const HeroVideoTitle = ({
   original_title,
   overview,
   vote_count,
   vote_average,
}) => {
   return (
      <div className="pt-[14%] pl-8 absolute text-white bg-gradient-to-r from-black h-[100vh] w-[40%] hidden sm:hidden md:flex flex-col">
         <div className="py-2 ml-8 font-extrabold sm:text-2xl md:text-4xl">
            {original_title}
         </div>
         <div className="py-2 ml-8 ">{overview}</div>
         <div className="flex my-2 ml-8">
            <button className="p-2 ml-1 bg-white text-black rounded-lg font-bold cursor-pointer hover:bg-opacity-50 text-lg w-36">
               PLAY
            </button>
            <button className="p-2 ml-1 bg-slate-500 rounded-lg text-white font-bold  cursor-pointer hover:bg-opacity-50 text-lg w-36">
               More Info
            </button>
         </div>
      </div>
   );
};

export default HeroVideoTitle;
