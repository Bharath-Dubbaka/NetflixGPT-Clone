import { MOVIE_OPTIONS } from "../utils/constants";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/store/moviesSlice";

const useNowPlaying = () => {
   const dispatch = useDispatch();
   const movieNowPlayingList = useSelector(
      (store) => store?.movies?.nowPlayingMovies
   );
   // console.log(movieNowPlayingList, "movieNowPlayingList");
   //  const { id } = useParams();
   //  console.log(id);
   const getNowPlayingMovies = async () => {
      const data = await fetch(
         "https://api.themoviedb.org/3/movie/now_playing?page=1",
         MOVIE_OPTIONS
      );
      const json = await data.json();
      // json && setPlayingMovies(json);
      dispatch(addNowPlayingMovies(json.results));
   };
   useEffect(() => {
      getNowPlayingMovies();
   }, []);
};

export default useNowPlaying;
