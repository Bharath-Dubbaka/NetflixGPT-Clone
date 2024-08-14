import React from "react";
import { useSelector } from "react-redux";
import GptSuggestions from "./GptSuggestions";
import GptSearch from "./GptSearch";
import { bgImgLogin } from "../../utils/constants";

const GptBody = () => {
   return (
      <div className="">
         <div className="absolute -z-10 w-[100%]">
            <img
               src={bgImgLogin}
               className=" w-[100%] min-h-[95vh] max-h-[100vh]"
               alt="bgImgLogin"
            />
         </div>
         <div className="flex flex-col pt-40 align-middle items-center ">
            <GptSearch />
            <GptSuggestions />
         </div>
      </div>
   );
};

export default GptBody;
