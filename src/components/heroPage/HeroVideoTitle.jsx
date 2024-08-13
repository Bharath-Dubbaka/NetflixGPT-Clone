import React from "react";

const HeroVideoTitle = ({
   original_title,
   overview,
   vote_count,
   vote_average,
}) => {
   return (
      <div className="pt-48 pl-8 absolute text-white bg-gradient-to-r from-black h-[90vh] w-[50%]">
         <div className="py-2 mx-8 font-extrabold text-4xl">
            {original_title}
         </div>
         <div className="py-2 mx-8 font-semibold ">{overview}</div>
         <div className="flex my-2 mx-8">
            <button className="p-2 mx-1 bg-white text-black rounded-lg font-bold cursor-pointer hover:bg-opacity-50 text-lg w-36">
               PLAY
            </button>
            <button className="p-2 mx-1 bg-slate-500 rounded-lg text-white font-bold  cursor-pointer hover:bg-opacity-50 text-lg w-36">
               More Info
            </button>
         </div>
      </div>
   );
};

export default HeroVideoTitle;
