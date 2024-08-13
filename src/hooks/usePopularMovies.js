import { MOVIE_OPTIONS } from "../utils/constants";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/store/moviesSlice";

const usePopularMovies = () => {
   const dispatch = useDispatch();
   const getPopularMovies = async () => {
      const data = await fetch(
         "https://api.themoviedb.org/3/movie/popular?&page=1",
         MOVIE_OPTIONS
      );
      const json = await data.json();
      dispatch(addPopularMovies(json.results));
   };
   useEffect(() => {
      getPopularMovies();
   }, []);
};

export default usePopularMovies;
