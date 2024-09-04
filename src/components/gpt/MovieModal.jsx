import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalSet, setSelectedMovieData, playId } from "../../utils/store/selectedMovieSlice";
import useHeroMovieTrailer from "../../hooks/useHeroMovieTrailer";
import useSelectedMovie from "../../hooks/useSelectedMovie";


const MovieModal = () => {
   const dispatch = useDispatch();
   const movieId = useSelector((store) => store.selectedMovie.id);
   const modalFn = () => {
      dispatch(modalSet());
      dispatch(playId(null));
      dispatch(setSelectedMovieData(null));
   };

   useSelectedMovie(movieId);
   const trailerKey = useSelector(
      (state) => state?.selectedMovie?.resForSelectedId
   );

   return (
      <div>
         <div className="absolute inset-0 z-50 flex items-center justify-center outline-none focus:outline-none">
            <div className="relative w-auto mx-auto ">
               <div className="border-0 rounded-lg shadow-lg flex flex-col bg-white outline-none focus:outline-none w-[55rem]">
                  <iframe
                     className="w-full aspect-video overflow-hidden rounded-t-lg"
                     src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=0&loop=1&modestbranding=1&autohide=1&showinfo=0&controls=0&rel=0`}
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; hardware=0; acceleration=0"
                     referrerPolicy="strict-origin-when-cross-origin"
                  ></iframe>
                  <div className="flex justify-center p-0 border-t border-solid rounded-b-lg">
                     <button
                        className="text-red-500  uppercase py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150  font-bold w-full hover:bg-gray-400"
                        type="button"
                        onClick={() => modalFn()}
                     >
                        Close
                     </button>
                  </div>
               </div>
            </div>
         </div>
         <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </div>
   );
};

export default MovieModal;
