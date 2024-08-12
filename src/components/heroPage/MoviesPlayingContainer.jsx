import React from "react";
import { useSelector } from "react-redux";
import HeroVideoTitle from "./HeroVideoTitle";

const MoviesPlayingContainer = () => {
   const movieNowPlayingList = useSelector(
      (store) => store?.movies?.nowPlayingMovies
   );
   // using early return in case the store has not yet dispatched with data
   if (!movieNowPlayingList) return;
   const heroMovie = movieNowPlayingList[0];
   //    console.log(heroMovie, "heroMovieheroMovie");
   const { original_title, overview, vote_count, vote_average } = heroMovie;
   return (
      <>
         {/* {movieNowPlayingList
            ? movieNowPlayingList.map((movie) => {
                 return <h2 key={movie.id}>{movie.title}</h2>;
              })
            : null} */}

         <HeroVideoTitle
            original_title={original_title}
            overview={overview}
            vote_count={vote_count}
            vote_average={vote_average}
         />
      </>
   );
};

export default MoviesPlayingContainer;
