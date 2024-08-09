import React from "react";
import { appLogo } from "../utils/constants";

const Header = () => {
   return (
      <div className="absolute z-10 py-6 pb-10 px-16 bg-gradient-to-b from-black min-w-full">
         <img src={appLogo} alt="appLogo" />
      </div>
   );
};

export default Header;
