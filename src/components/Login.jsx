import React, { useState } from "react";
import { bgImgLogin } from "../utils/constants";
import Header from "./Header";
import { useParams } from "react-router-dom";
import { checkValidation } from "../utils/validations";
import { useRef } from "react";

const Login = () => {
   const [isSignIn, setIsSignIn] = useState(true);
   const [errValidation, setErrValidation] = useState(null);
   //  const idP = useParams();

   const toggleClick = () => {
      setIsSignIn(!isSignIn);
      console.log(idP);
   };

   //  using useRef to extract value from inputs rather than conventional state variables
   const emailRef = useRef(null);
   const passwordRef = useRef(null);

   const handleSubmit = (e) => {
      let mail = emailRef.current.value;
      let pass = passwordRef.current.value;
      const responseValid = checkValidation(mail, pass);
      setErrValidation(responseValid);
      // console.log(responseValid, "responseValid");
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
         <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-opacity-75 absolute flex flex-col w-[50%] bg-black rounded-lg p-10 my-20 mx-auto right-0 left-0	"
         >
            <div className="text-white mb-3 font-bold	text-3xl">
               {isSignIn ? "Sign In" : "Sign Up"}
            </div>
            <input
               type="email"
               placeholder="Email"
               className="p-2 m-2 h-12 rounded-md bg-black border border-slate-500	"
               ref={emailRef}
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
               ref={passwordRef}
            />
            {errValidation ? (
               <p className="text-lg text-red-500 p-1 m-2">{errValidation}</p>
            ) : null}
            <button
               className="font-semibold p-2 m-2 my-3 rounded-md text-white bg-red-600 hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring focus:ring-gray-500"
               onClick={handleSubmit}
            >
               {isSignIn ? "Sign In" : "Sign Up"}
            </button>
            <div className="p-1 m-1">
               <input type="checkbox" name="rememberMe" id="rememberMe" />{" "}
               Remember Me
            </div>
            <div className="p-1 m-1 font-semibold text-gray-400">
               {isSignIn ? "New to Netflix?" : "Already a customer ?"}
               <span className="font-bold text-white" onClick={toggleClick}>
                  {" "}
                  {isSignIn ? "Sign up now." : "Sign In"}
               </span>
            </div>
         </form>
      </div>
   );
};

export default Login;
