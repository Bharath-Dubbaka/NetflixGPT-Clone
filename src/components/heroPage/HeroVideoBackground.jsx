import React, { useEffect, useState } from "react";
import { MOVIE_OPTIONS } from "../../utils/constants";

const HeroVideoBackground = ({ id }) => {
   const [vidLink, setVidLink] = useState(null);
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
      setVidLink(firstLink?.key);
   };
   useEffect(() => {
      heroMovieVideo();
   }, []);
   return (
      <div>
         <div>
            <button
               onClick={() => {
                  console.log(`https://www.youtube.com/watch?v=${vidLink}`);
               }}
            >
               HeroTrailer
            </button>
         </div>
      </div>
   );
};

export default HeroVideoBackground;
