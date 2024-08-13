import React from "react";
import { useSelector } from "react-redux";
import GptSuggestions from "./GptSuggestions";
import GptSearch from "./GptSearch";

const GptBody = () => {
   return (
      <div className="pt-40 flex flex-col items-center bg-black h-[100vh] text-white">
         <GptSearch />
         <GptSuggestions />
      </div>
   );
};

export default GptBody;
