import React, { useEffect, useState } from "react";
import { MOVIE_OPTIONS } from "../../utils/constants";
import useHeroMovieTrailer from "../../hooks/useHeroMovieTrailer";
import { useSelector } from "react-redux";

const HeroVideoBackground = ({ id }) => {
   useHeroMovieTrailer(id);
   const trailerKey = useSelector((state) => state?.movies?.heroMovieTrailer);
   console.log(trailerKey);

   return (
      <div className="bg_utube w-full h-full overflow-hidden pt-10 sm:pt-0 md:pt-0">
         <iframe
            className="w-full aspect-video overflow-hidden"
            src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&loop=1&playlist=${trailerKey}&modestbranding=1&autohide=1&showinfo=0&controls=0&rel=0`}
            // title="Deadpool &amp; Wolverine | Final Trailer | In Theaters July 26"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; hardware=0; acceleration=0"
            referrerPolicy="strict-origin-when-cross-origin"
         ></iframe>
      </div>
   );
};

export default HeroVideoBackground;
