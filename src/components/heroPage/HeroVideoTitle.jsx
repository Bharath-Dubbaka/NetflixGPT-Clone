import React from "react";

const HeroVideoTitle = ({
   original_title,
   overview,
   vote_count,
   vote_average,
}) => {
   return (
      <div className="absolute top-10 sm:top-2 md:-top-36 left-0 z-20 flex flex-col justify-center bottom-0 w-full pl-4 sm:pl-6 md:pl-10 aspect-video bg-gradient-to-t from-black from-10%">
         <div className="w-2/3 sm:w-1/2 md:w-1/3">
            <div
               className="hidden md:flex text-xl sm:text-3xl md:text-3xl font-bold mb-2 whitespace-nowrap text-white"
               style={{ filter: "drop-shadow(2px 4px 1.5px black)" }}
            >
               {original_title}
            </div>
            <p
               className="hidden md:flex max-h-20 h-fit md:line-clamp-2 mb-3 text-sm text-white"
               style={{ filter: "drop-shadow(2px 4px 1.5px black)" }}
            >
               {overview}
            </p>
            <div className="hidden md:flex mb-10">
               <button
                  // onClick={handleMovieInfoVideo}
                  className="p-1 ml-1 bg-white text-black rounded-lg font-bold cursor-pointer hover:bg-opacity-50 text-lg w-36"
               >
                  Play
               </button>
               <button
                  // onClick={handleMovieInfoPage} //hidden sm:inline
                  className="bg-slate-500 rounded-lg text-white font-bold  cursor-pointer hover:bg-opacity-50 text-lg w-36 ml-2"
               >
                  More Info
               </button>
            </div>
         </div>
         {/* <div className="pt-[14%] pl-8 absolute text-white bg-gradient-to-r from-black h-[100vh] w-[40%] hidden sm:hidden md:flex flex-col">
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
      </div> */}
      </div>
   );
};

export default HeroVideoTitle;
