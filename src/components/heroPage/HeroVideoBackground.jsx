import React, { useEffect, useState } from "react";
import { MOVIE_OPTIONS } from "../../utils/constants";
import useHeroMovieTrailer from "../../hooks/useHeroMovieTrailer";
import { useSelector } from "react-redux";

const HeroVideoBackground = ({ id }) => {
   useHeroMovieTrailer(id);
   const trailerKey = useSelector((state) => state?.movies?.heroMovieTrailer);
   console.log(trailerKey);

   return (
      <div className="w-[100%] overflow-hidden">
         <iframe
            className="w-screen aspect-video h-[90vh] pointer-events-none"
            src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&loop=1&playlist=${trailerKey}&modestbranding=1&autohide=1&showinfo=0&controls=0`}
            title="Deadpool &amp; Wolverine | Final Trailer | In Theaters July 26"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; hardware=0; acceleration=0"
            referrerPolicy="strict-origin-when-cross-origin"
         ></iframe>
      </div>
   );
};

export default HeroVideoBackground;
