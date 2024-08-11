import React, { useState } from "react";
import { bgImgLogin } from "../utils/constants";
import Header from "./Header";
import { useParams } from "react-router-dom";
import { checkValidation } from "../utils/validations";
import { useRef } from "react";
import {
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/store/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
   const [isSignIn, setIsSignIn] = useState(true);
   const [errValidation, setErrValidation] = useState(null);
   //  const idP = useParams();
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const toggleClick = () => {
      setIsSignIn(!isSignIn);
   };

   //  using useRef to extract value from inputs rather than conventional state variables
   const nameRef = useRef(null);
   const emailRef = useRef(null);
   const passwordRef = useRef(null);

   const handleSubmit = (e) => {
      let mail = emailRef.current.value;
      let pass = passwordRef.current.value;

      const responseValid = checkValidation(mail, pass);
      setErrValidation(responseValid);

      // //null means the validation has passed and no err string to return/ if not just return
      if (responseValid) return;
      // // Not signIn means signUP
      if (!isSignIn) {
         createUserWithEmailAndPassword(auth, mail, pass)
            .then((userCredential) => {
               // // SignUP
               const user = userCredential.user;
               // // AFTER SIGNUP THEN UPDATE PROFILE DETAILS
               updateProfile(auth.currentUser, {
                  displayName: nameRef.current.value,
                  photoURL:
                     "https://cdn3.iconfinder.com/data/icons/feather-5/24/user-minus-256.png",
               })
                  .then(() => {
                     // // Profile updated

                     dispatch(
                        addUser({
                          
                           displayName: user.displayName,
                           photoURL: user.photoURL,
                        })
                     );
                     navigate("/browse");
                  })
                  .catch((error) => {
                     setErrValidation(error.message);
                  });
            })
            .catch((error) => {
               const errorCode = error.code;
               const errorMessage = error.message;
               console.log(error.message, error.code, "from signUP");
               setErrValidation("Please enter valid credentials" + errorCode);
               // ..
            });
      } else {
         //signIn logic
         signInWithEmailAndPassword(auth, mail, pass)
            .then((userCredential) => {
               // Signed in
               const user = userCredential.user;
               console.log(user, "user from signIN");
               navigate("/browse");

               // ...
            })
            .catch((error) => {
               const errorCode = error.code;
               const errorMessage = error.message;
               console.log(error.message, error.code, "from signIN");
               setErrValidation("Please enter valid credentials" + errorCode);
            });
      }
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
                  ref={nameRef}
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
               <p className="text-lg text-red-500 p-1 m-1 font-bold">
                  {errValidation}
               </p>
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
