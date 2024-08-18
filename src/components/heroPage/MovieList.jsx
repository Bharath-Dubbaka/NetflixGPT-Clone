import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
   // console.log(movies, "moviesh");

   // //   add shimer later
   // if(!movies) return
   return (
      <div className=" px-4 sm:px-6">
         <div className="text-white font-semibold py-4 sm:text-2xl md:text-3xl">{title}</div>
         <div className="flex  overflow-x-scroll">
            <div className="flex ">
               {movies?.map((movie) => (
                  <MovieCard key={movie.id} poster_path={movie.poster_path} />
               ))}
            </div>
         </div>
      </div>
   );
};

export default MovieList;
