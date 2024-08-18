import { MOVIE_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/store/moviesSlice";

const useTopRatedMovies = () => {
   const topRatedStore = useSelector((store) => store?.movies?.topRatedMovies);

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
      !topRatedStore ? getTopRatedMovies() : null;
   }, []);
};

export default useTopRatedMovies;
