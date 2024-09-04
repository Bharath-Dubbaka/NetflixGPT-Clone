import React from "react";
import { useSelector } from "react-redux";
import GptSuggestions from "./GptSuggestions";
import GptSearch from "./GptSearch";
import { bgImgLogin } from "../../utils/constants";

const GptBody = () => {
   return (
      <div className="bg-gradient-to-r from-black min-h-[100vh] ">
         <div className="absolute w-[100%]">
            <img
               src={bgImgLogin}
               className=" w-full min-h-screen object-cover object-left-top fixed top-0 	"
               alt="bgImgLogin"
            />
         </div>
         <div className="flex flex-col pt-40 align-middle items-center backdrop-blur-sm relative min-h-screen">
            <GptSearch />
            <GptSuggestions />
         </div>
      </div>
   );
};

export default GptBody;
