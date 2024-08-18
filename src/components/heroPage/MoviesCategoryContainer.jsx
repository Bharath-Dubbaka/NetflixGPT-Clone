import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const MoviesCategoryContainer = () => {
   const movies = useSelector((store) => store?.movies);
   // console.log(nowPlayingList, "nowPlayingListnowPlayingList");
   return (
      <div className=" bg-black">
         <div className="-mt-48 relative z-10 pl-0 pb-8 sm:-mt-52 sm:pl-2 md:-mt-[23%] md:pl-8">
            <MovieList title="Now Playing" movies={movies?.nowPlayingMovies} />
            <MovieList title="Popular Movies" movies={movies?.popularMovies} />
            <MovieList title="Top Rated" movies={movies?.topRatedMovies} />

            <MovieList
               title="Upcoming Movies"
               movies={movies?.upcomingMovies}
            />
         </div>
      </div>
   );
};

export default MoviesCategoryContainer;
