import React from "react";

const HeroVideoTitle = ({
   original_title,
   overview,
   vote_count,
   vote_average,
}) => {
   return (
      <div className="pt-48">
         <div className="py-2 mx-8 font-extrabold text-4xl">
            {original_title}
         </div>
         <div className="py-2 mx-8 font-semibold w-[50%]">{overview}</div>
         <div className="flex my-2 mx-8">
            <button className="p-4 mx-4 bg-red-600 text-white rounded-lg font-bold cursor-pointer hover:bg-red-700 text-lg w-36">
               PLAY ▶️
            </button>
            <button className="p-4 mx-1 bg-slate-500 rounded-lg text-white font-bold  cursor-pointer hover:bg-slate-600 text-lg w-36">
               More Info❗
            </button>
         </div>
      </div>
   );
};

export default HeroVideoTitle;
