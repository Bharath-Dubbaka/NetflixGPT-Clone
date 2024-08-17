import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../heroPage/MovieList";
const GptSuggestions = () => {
   const { moviesNames, moviesResults } = useSelector((store) => store?.gpt);
   console.log(moviesResults);

   // add shimer later
   if (!moviesNames) return;
   return (
      <div className=" text-white font-bold px-14 py-4 rounded-lg w-full flex flex-col ">
         {moviesNames.map((movie, index) => (
            <MovieList
               key={movie}
               title={movie}
               movies={moviesResults[index]?.results}
            />
         ))}
      </div>
   );
};

export default GptSuggestions;
