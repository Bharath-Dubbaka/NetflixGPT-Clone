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
import ShimmerBody from "./shimmerUI/ShimmerBrowse";
import MovieModal from "./gpt/MovieModal";

const Browse = () => {
   const toggledGptState = useSelector((store) => store?.gpt?.showGptSearch);
   const isOpen = useSelector((store) => store.movies.modalOpen);

   useNowPlaying();
   usePopularMovies();
   useTopRatedMovies();
   useUpcomingMovies();

   return (
      <div className="bg-black">
         <Header />
         {toggledGptState ? (
            <GptBody />
         ) : (
            <div>
               <MoviesPlayingContainer />
               <MoviesCategoryContainer />
            </div>
         )}
         {isOpen && (
            <div className="fixed top-0 backdrop-blur-sm p-2 w-full h-full flex items-center justify-center z-50">
               <MovieModal />
            </div>
         )}
      </div>
   );
};

export default Browse;
