import React, { useState, useEffect } from "react";
import { IMG_CDN } from "../../utils/constants";
import { modalSet } from "../../utils/store/moviesSlice";
import { useDispatch } from "react-redux";

const MovieCard = ({ poster_path, movieId }) => {
   const dispatch = useDispatch();
   const clickMovie = () => {
      console.log("Clicked in movies");
      dispatch(modalSet());
   };
   if (!poster_path) return null;

   return (
         <div className="w-32 pr-2 cursor-pointer sm:w-40 sm:pr-4 md:w-48 md:pr-6 hover:scale-90 transition-all">
            <img
               src={IMG_CDN + poster_path}
               alt="movieImg "
               className="rounded-lg  h-full sm:h-full md:h-full object-cover w-full"
               onClick={clickMovie}
            />
         </div>
   );
};

export default MovieCard;
