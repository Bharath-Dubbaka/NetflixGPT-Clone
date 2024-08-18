import { MOVIE_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/store/moviesSlice";

const useNowPlaying = () => {
   const nowPlayingStore = useSelector(
      (store) => store?.movies?.nowPlayingMovies
   );

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
      !nowPlayingStore ? getNowPlayingMovies() : null;
   }, []);
};

export default useNowPlaying;
