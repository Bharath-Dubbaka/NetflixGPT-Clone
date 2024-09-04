import React, { useState } from "react";
import { useSelector } from "react-redux";
import MovieList from "../heroPage/MovieList";
import ShimmerGPT from "../shimmerUI/ShimmerGPT";
const GptSuggestions = () => {
   const { moviesNames, moviesResults, showGptSearch, searchBtnClicked } =
      useSelector((store) => store?.gpt);
   console.log(moviesResults);

   // add shimer later
   if (!searchBtnClicked) return null;
   return (
      <div className=" text-white font-bold py-2 rounded-lg w-full flex flex-col sm:py-6 md:py8 z-30">
         {searchBtnClicked && !(moviesNames == null) ? (
            moviesNames.map((movie, index) => (
               <MovieList
                  key={movie}
                  title={movie}
                  movies={moviesResults[index]?.results}
               />
            ))
         ) : (
            <ShimmerGPT />
         )}
      </div>
   );
};

export default GptSuggestions;
