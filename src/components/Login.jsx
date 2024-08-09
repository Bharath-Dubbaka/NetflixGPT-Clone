import React from "react";
import { bgImgLogin } from "../utils/constants";
import Header from "./Header";
const Login = () => {
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
            <div className="text-white mb-3 font-bold	text-3xl">Sign In</div>
            <input
               type="email"
               placeholder="Email"
               className="p-2 m-2 h-12 rounded-md bg-black border border-slate-500	"
            />
            <input
               type="password"
               placeholder="Password"
               className="p-2 m-2 h-12 rounded-md bg-black border border-slate-500"
            />

            <button className="font-semibold p-2 m-2 rounded-md text-white bg-red-600 hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring focus:ring-gray-500">
               Sign In
            </button>
            <div className="p-1 m-1 text-center">OR</div>
            <button className=" font-semibold p-2 m-2 rounded-md text-white bg-gray-700 hover:bg-gray-600 active:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-600 bg-opacity-75">
               Use a sign-in-code
            </button>
            <div className="p-1 m-1 text-center">Forgot password ?</div>
            <div className="p-1 m-1">
               <input type="checkbox" name="rememberMe" id="rememberMe" />{" "}
               Remember Me
            </div>
            <div className="p-1 m-1 font-semibold text-gray-400">
               New to Netflix?{" "}
               <span className="font-bold text-white"> Sign up now.</span>
            </div>
         </form>
      </div>
   );
};

export default Login;
