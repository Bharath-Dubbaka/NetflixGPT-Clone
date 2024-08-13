import { MOVIE_OPTIONS } from "../utils/constants";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/store/moviesSlice";

const useUpcomingMovies = () => {
   const dispatch = useDispatch();
   const getUpcomingMovies = async () => {
      const data = await fetch(
         "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",

         MOVIE_OPTIONS
      );
      const json = await data.json();
      dispatch(addUpcomingMovies(json.results));
   };
   useEffect(() => {
      getUpcomingMovies();
   }, []);
};

export default useUpcomingMovies;
