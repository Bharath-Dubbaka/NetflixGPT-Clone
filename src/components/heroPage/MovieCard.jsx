import React, { useState, useEffect } from "react";
import { IMG_CDN } from "../../utils/constants";
import { modalSet, playId } from "../../utils/store/selectedMovieSlice";
import { useDispatch } from "react-redux";

const MovieCard = ({ movieDetails }) => {
   const dispatch = useDispatch();
   const clickMovie = (id) => {
      console.log("Clicked in movies");
      dispatch(modalSet());
      dispatch(playId(id));
   };
   console.log(movieDetails, "movieDetails");
   if (!movieDetails?.poster_path) return null;

   return (
      <div className="w-32 pr-2 cursor-pointer sm:w-40 sm:pr-4 md:w-48 md:pr-6 hover:scale-90 transition-all">
         <img
            src={IMG_CDN + movieDetails?.poster_path}
            alt="movieImg "
            className="rounded-lg  h-full sm:h-full md:h-full object-cover w-full"
            onClick={() => clickMovie(movieDetails.id)}
         />
      </div>
   );
};

export default MovieCard;
