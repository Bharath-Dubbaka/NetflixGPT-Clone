import React from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import useNowPlaying from "../hooks/useNowPlaying";
import MoviesPlayingContainer from "./heroPage/MoviesPlayingContainer";
import MoviesCategoryContainer from "./heroPage/MoviesCategoryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptBody from "./gpt/GptBody";

const Browse = () => {
   const toggledGptState = useSelector((store) => store?.gpt?.showGptSearch);

   useNowPlaying();
   usePopularMovies();
   useTopRatedMovies();
   useUpcomingMovies();
   return (
      <>
         <Header />
         {toggledGptState ? (
            <GptBody />
         ) : (
            <div>
               <MoviesPlayingContainer />
               <MoviesCategoryContainer />
            </div>
         )}
      </>
   );
};

export default Browse;
