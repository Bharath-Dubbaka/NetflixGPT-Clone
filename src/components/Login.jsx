import React, { useState } from "react";
import { bgImgLogin } from "../utils/constants";
import Header from "./Header";
import { useParams } from "react-router-dom";

const Login = () => {
   const [isSignIn, setIsSignIn] = useState(true);
   const idP = useParams();

   const handleClick = () => {
      setIsSignIn(!isSignIn);
      console.log(idP);
   };
   return (
      <div className="text-white">
         <Header />
         <div className=" absolute bg-gradient-to-b from-black w-[100%]">
            <img
               src={bgImgLogin}
               className=" w-[100%] min-h-[95vh] max-h-[100vh]"
               alt="bgImgLogin"
            />
         </div>
         <form className="bg-opacity-75 absolute flex flex-col w-[50%] bg-black rounded-lg p-10 my-20 mx-auto right-0 left-0	">
            <div className="text-white mb-3 font-bold	text-3xl">
               {isSignIn ? "Sign In" : "Sign Up"}
            </div>
            <input
               type="email"
               placeholder="Email"
               className="p-2 m-2 h-12 rounded-md bg-black border border-slate-500	"
            />
            {isSignIn ? null : (
               <input
                  type="text"
                  placeholder="Full Name"
                  className="p-2 m-2 h-12 rounded-md bg-black border border-slate-500"
               />
            )}
            <input
               type="password"
               placeholder="Password"
               className="p-2 m-2 h-12 rounded-md bg-black border border-slate-500"
            />

            <button className="font-semibold p-2 m-2 rounded-md text-white bg-red-600 hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring focus:ring-gray-500">
               {isSignIn ? "Sign In" : "Sign Up"}
            </button>
            {/* <div className="p-1 m-1 text-center">OR</div>
            <button className=" font-semibold p-2 m-2 rounded-md text-white bg-gray-700 hover:bg-gray-600 active:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-600 bg-opacity-75">
               Use a sign-in-code
            </button> */}
            {/* {isSignIn ? (
               <div className="p-1 m-1 text-center">Forgot password ?</div>
            ) : null} */}
            <div className="p-1 m-1">
               <input type="checkbox" name="rememberMe" id="rememberMe" />{" "}
               Remember Me
            </div>
            <div className="p-1 m-1 font-semibold text-gray-400">
               {isSignIn ? "New to Netflix?" : "Already a customer ?"}
               <span className="font-bold text-white" onClick={handleClick}>
                  {" "}
                  {isSignIn ? "Sign up now." : "Sign In"}
               </span>
            </div>
         </form>
      </div>
   );
};

export default Login;
