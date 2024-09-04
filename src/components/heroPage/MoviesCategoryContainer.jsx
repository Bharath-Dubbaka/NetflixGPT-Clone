import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const MoviesCategoryContainer = () => {
   const movies = useSelector((store) => store?.movies);
   // console.log(nowPlayingList, "nowPlayingListnowPlayingList");
   return (
      <div className=" bg-black">
         <div className=" px-1 sm:pl-4 md:pl-4 relative -mt-[25px] sm:-mt-[100px] md:-mt-[20%] z-40">
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
