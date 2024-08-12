import React from "react";
import { useSelector } from "react-redux";
import HeroVideoTitle from "./HeroVideoTitle";
import HeroVideoBackground from "./HeroVideoBackground";

const MoviesPlayingContainer = () => {
   const movieNowPlayingList = useSelector(
      (store) => store?.movies?.nowPlayingMovies
   );
   // using early return in case the store has not yet dispatched with data
   if (!movieNowPlayingList) return;
   const heroMovie = movieNowPlayingList[0];
   const { original_title, overview, vote_count, vote_average, id } = heroMovie;
   return (
      <>
         <HeroVideoTitle
            original_title={original_title}
            overview={overview}
            vote_count={vote_count}
            vote_average={vote_average}
         />
         <HeroVideoBackground id={id} />
      </>
   );
};

export default MoviesPlayingContainer;
