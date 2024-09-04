import React from "react";
import { useSelector } from "react-redux";

const MovieModal = () => {
   return (
      <div>
         <div
            className="absolute inset-0 z-50 flex items-center justify-center outline-none focus:outline-none"
         >
            <div className="relative w-auto mx-auto max-w-3xl">
               <div className="border-0 rounded-lg shadow-lg flex flex-col w-full bg-white outline-none focus:outline-none">
                  <iframe
                     className="w-full aspect-video overflow-hidden rounded-t-lg"
                     src={`https://www.youtube.com/embed/TAB_v6yBXIE?autoplay=1&mute=1&loop=1&modestbranding=1&autohide=1&showinfo=0&controls=0&rel=0`}
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; hardware=0; acceleration=0"
                     referrerPolicy="strict-origin-when-cross-origin"
                  ></iframe>
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b-lg">
                     <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                     >
                        Close
                     </button>
                     <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                     >
                        Save Changes
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
