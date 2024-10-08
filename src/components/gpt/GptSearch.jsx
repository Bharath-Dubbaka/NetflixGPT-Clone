import React, { useEffect, useRef } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { MOVIE_OPTIONS, OPEN_AI_KEY } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { getMovies, searchBtn } from "../../utils/store/gptSlice";

const GptSearch = () => {
   let inputRef = useRef(null);
   const genAI = new GoogleGenerativeAI(OPEN_AI_KEY);
   const dispatch = useDispatch();

   //using the data from GEMINI to call TMDB for each movie title
   const getMoviesFromTMDB = async (movieName) => {
      try {
         const data = await fetch(
            "https://api.themoviedb.org/3/search/movie?query=" +
               movieName +
               "&include_adult=false&language=en-US&page=1",
            MOVIE_OPTIONS
         );
         const json = await data.json();
         return json;
         // console.log(json, "FROM TMDB after GEMINI");
      } catch (err) {
         console.error(err);
      }
   };

   const handleSearchTxt = (e) => {
      e.preventDefault();
      console.log("clicked", inputRef.current.value);
      // USING GEMINI AI
      dispatch(searchBtn());
      async function run() {
         const textWithPrefix =
            "Act as a Movie Recommendation system and suggest 5 movies names only for the query : " +
            inputRef.current.value +
            "comma separated, without bullets just like the example result given a head, exampleResult: Golmaal, Shivaji, Gadar, Don, Go goa gone.";
         // For text-only input, use the gemini-pro model
         const model = genAI.getGenerativeModel({ model: "gemini-pro" });
         const result = await model.generateContent(textWithPrefix);
         const response = await result.response;
         const text = response.text();
         console.log(text, "from GEMINI ");
         const convertedToArrList = text.split(", ");
         const promiseArr = convertedToArrList.map((movieName) =>
            getMoviesFromTMDB(movieName)
         );
         const resMovies = await Promise.all(promiseArr);
         dispatch(
            getMovies({
               movieNamesFromGemini: convertedToArrList,
               movieResultsFromTMDB: resMovies,
            })
         );
         // console.log(resMovies);
      }
      run();
   };

   return (
      <div className="	bg-slate-800 py-2 rounded-lg  flex justify-center w-[90%] sm:w-[65%] md:w-[65%] z-20 ">
         {/* <form
            onSubmit={(e) => e.preventDefault()}
            className=" "
         > */}
         <input
            ref={inputRef}
            type="text"
            placeholder="What would you like to watch today..."
            className="w-[60%] h-10 rounded-lg my-2 mr-2 pl-2 text-lg"
         />
         <button
            className="bg-red-600 h-10 rounded-lg font-bold text-white w-[25%] mt-2"
            onClick={handleSearchTxt}
         >
            Search
         </button>
         {/* </form> */}
      </div>
   );
};

export default GptSearch;
