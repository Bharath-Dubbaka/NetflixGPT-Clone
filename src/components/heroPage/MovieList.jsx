import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
   console.log(movies, "moviesh");

   return (
      <div className=" px-6">
         <div className="text-white text-3xl font-semibold py-4">{title}</div>
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
