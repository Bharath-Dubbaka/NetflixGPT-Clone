import { MOVIE_OPTIONS } from "../utils/constants";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/store/moviesSlice";

const useNowPlaying = () => {
   const dispatch = useDispatch();
   const getNowPlayingMovies = async () => {
      const data = await fetch(
         "https://api.themoviedb.org/3/movie/now_playing?page=1",
         MOVIE_OPTIONS
      );
      const json = await data.json();
      dispatch(addNowPlayingMovies(json.results));
   };
   useEffect(() => {
      getNowPlayingMovies();
   }, []);
};

export default useNowPlaying;
