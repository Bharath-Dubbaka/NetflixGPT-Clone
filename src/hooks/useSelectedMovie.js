import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MOVIE_OPTIONS } from "../utils/constants";
import { setSelectedMovieData } from "../utils/store/selectedMovieSlice";

const useSelectedMovie = (id) => {
   const dispatch = useDispatch();
   const selectedMovieVideo = async () => {
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
      dispatch(setSelectedMovieData(firstLink?.key));
   };
   useEffect(() => {
      selectedMovieVideo();
   }, []);
};

export default useSelectedMovie;
