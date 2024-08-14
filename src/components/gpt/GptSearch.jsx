import React from "react";

const GptSearch = () => {
   return (
      <div className="	bg-black px-10 py-4 rounded-lg w-[40%] flex justify-center" >
         <form action="">
            <input
               type="text"
               placeholder="What would you like to watch today..."
               className="w-80 h-10 rounded-lg my-2 mr-2"
            />
            <button className="bg-red-600 h-10 px-4 rounded-lg font-bold">
               Search
            </button>
         </form>
      </div>
   );
};

export default GptSearch;
