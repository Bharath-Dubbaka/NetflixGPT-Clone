import React from "react";

const GptSearch = () => {
   return (
      <div>
         <form action="">
            <input
               type="text"
               placeholder="What would you like to watch today..."
               className="w-80 h-10 rounded-lg my-2 mr-2"
            />
            <button className="bg-slate-600 h-10 px-4 rounded-lg font-bold">
               Search
            </button>
         </form>
      </div>
   );
};

export default GptSearch;
