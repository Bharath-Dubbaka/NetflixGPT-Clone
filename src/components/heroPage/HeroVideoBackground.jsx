import React, { useEffect, useState } from "react";
import { MOVIE_OPTIONS } from "../../utils/constants";
import useHeroMovieTrailer from "../../hooks/useHeroMovieTrailer";
import { useSelector } from "react-redux";

const HeroVideoBackground = ({ id }) => {
   useHeroMovieTrailer(id);
   const trailerKey = useSelector((state) => state?.movies?.heroMovieTrailer);
   console.log(trailerKey);

   return (
      <div>
         <div className="w-screen">
            <iframe
               src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1`}
               title="Deadpool &amp; Wolverine | Final Trailer | In Theaters July 26"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
               referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>

            {/* <iframe
               className="w-screen h-full"
               src={`https://www.youtube.com/embed/${vidLink}?autoplay=1&mute=1`}
               title="YouTube video player"
               frameBorder="0"
               sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
               allowFullScreen
            ></iframe> */}
         </div>
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
