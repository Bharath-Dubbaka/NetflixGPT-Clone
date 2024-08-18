import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MOVIE_OPTIONS } from "../utils/constants";
import { addHeroMovieTrailer } from "../utils/store/moviesSlice";

const useHeroMovieTrailer = (id) => {
   const heroTrailerStore = useSelector((store) => store?.movies?.heroMovieTrailer);
   const dispatch = useDispatch();
   const heroMovieVideo = async () => {
      const data = await fetch(
         `https://api.themoviedb.org/3/movie/
              ${id}
              /videos?language=en-US`,
         MOVIE_OPTIONS
      );
      const json = await data.json();
      const trailers = json.results.filter((vids) => vids?.type == "Trailer");
      const firstLink = trailers.length >= 0 ? trailers[0] : json?.results[0];
      //   setVidLink(firstLink?.key);
      dispatch(addHeroMovieTrailer(firstLink?.key));
   };
   useEffect(() => {
      !heroTrailerStore ? heroMovieVideo() : null;
   }, []);
};

export default useHeroMovieTrailer;
