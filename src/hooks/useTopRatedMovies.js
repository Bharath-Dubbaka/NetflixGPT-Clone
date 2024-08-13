import { MOVIE_OPTIONS } from "../utils/constants";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/store/moviesSlice";

const useTopRatedMovies = () => {
   const dispatch = useDispatch();
   const getTopRatedMovies = async () => {
      const data = await fetch(
         "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",

         MOVIE_OPTIONS
      );
      const json = await data.json();
      dispatch(addTopRatedMovies(json.results));
   };
   useEffect(() => {
      getTopRatedMovies();
   }, []);
};

export default useTopRatedMovies;
