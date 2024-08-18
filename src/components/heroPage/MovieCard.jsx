import React from "react";
import { IMG_CDN } from "../../utils/constants";
const MovieCard = ({ poster_path }) => {
   if (!poster_path) return null;
   return (
      <div className="w-32 pr-2 cursor-pointer sm:w-40 sm:pr-4 md:w-48 md:pr-6">
         <img
            src={IMG_CDN + poster_path}
            alt="movieImg "
            className="rounded-lg h-52 sm:h-full md:h-full object-cover"
         />
      </div>
   );
};

export default MovieCard;
