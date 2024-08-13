import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import { MOVIE_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import useNowPlaying from "../hooks/useNowPlaying";
import MoviesPlayingContainer from "./heroPage/MoviesPlayingContainer";
import MoviesCategoryContainer from "./heroPage/MoviesCategoryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {
   useNowPlaying();
   usePopularMovies();
   useTopRatedMovies();
   useUpcomingMovies();
   return (
      <>
         <Header />
         <div>
            <MoviesPlayingContainer />
            <MoviesCategoryContainer />
         </div>
      </>
   );
};

export default Browse;
