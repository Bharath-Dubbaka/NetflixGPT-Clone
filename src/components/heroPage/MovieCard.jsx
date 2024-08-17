import React from "react";
import { IMG_CDN } from "../../utils/constants";
const MovieCard = ({ poster_path }) => {
   if (!poster_path) return null;
   return (
      <div className="w-48 pr-4 cursor-pointer">
         <img
            src={IMG_CDN + poster_path}
            alt="movieImg "
            className="rounded-lg"
         />
      </div>
   );
};

export default MovieCard;
