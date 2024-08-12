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
      // console.log(json, "HERO VIDEO JSON");
      const trailer = json.results.filter((vids) => vids?.type == "Trailer");
      // console.log(trailer, "trailertrailertrailer");
      const firstLink = trailer.length >= 0 ? trailer[0] : json?.results[0];
      // console.log(firstLink, "firstLink");
      setVidLink(firstLink?.key);
   };

   useEffect(() => {
      heroMovieVideo();
   }, []);
   return (
      <div>
         <div
         // onClick={() => {
         //    <Link
         //       to={`https://www.youtube.com/watch?v=${trailer[0].key}`}
         //    ></Link>;
         // }}
         >
            <button
               onClick={() => {
                  console.log(`https://www.youtube.com/watch?v=${vidLink}`);
               }}
            >
               HeroTrailer
            </button>
            {/* {console.log(
               `https://www.youtube.com/watch?v=${firstLink.key}`,
               "`https://www.youtube.com/watch?v=${firstLink.key}`"
            )} */}
         </div>
      </div>
   );
};

export default HeroVideoBackground;
