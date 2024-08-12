import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import { MOVIE_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import useNowPlaying from "../hooks/useNowPlaying";
import MoviesPlayingContainer from "./heroPage/MoviesPlayingContainer";
import MoviesCategoryContainer from "./heroPage/MoviesCategoryContainer";

const Browse = () => {
   //   const dispatch = useDispatch();

   useNowPlaying();
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
