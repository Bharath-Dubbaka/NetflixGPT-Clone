import React, { useEffect, useState } from "react";
import { appLogo } from "../utils/constants";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/store/userSlice";
import { toggleGPTSearch } from "../utils/store/gptSlice";

const Header = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const userDetails = useSelector((store) => store?.user);

   useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (user) => {
         if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const { uid, email, displayName, photoURL } = user;
            dispatch(
               addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
               })
            );
            navigate("/browse");
            // ...
         } else {
            // User is signed out
            dispatch(removeUser());
            navigate("/");
         }
      });

      //cleaning/unSubscribe to the onAuthStateChanged when compo unMounts
      return () => unSubscribe();
   }, []);

   const handleSignOut = () => {
      console.log("clicked");
      signOut(auth)
         .then(() => {
            // Sign-out successful, don't have to navigate again as the onAuthStateChanged
            //is already listening to all auth calls whenever the headerCompo is rendered
            // navigate("/");
         })
         .catch((error) => {
            // An error happened.
            navigate("/error");
         });
   };

   const toggleGPT = () => {
      dispatch(toggleGPTSearch());
   };

   return (
      <div className="absolute z-10 py-6 pb-10  bg-gradient-to-b from-black w-[100%] flex flex-col justify-between sm:flex-row md:flex-row">
         <div className="flex justify-between pr-10 min-w-[85%] sm:min-w-[65%] md:min-w-[75%] sm:pr-0 md:pr-0">
            <div>
               <img src={appLogo} alt="appLogo" className="pl-8" />
            </div>
            {userDetails ? (
               <div className="flex items-center">
                  <img
                     className="h-8"
                     src={userDetails?.photoURL}
                     alt="userPhotoURL"
                  />
                  <div className="text-white p-1 hover:text-slate-400 font-bold">
                     Hi, {userDetails?.displayName}
                  </div>
               </div>
            ) : null}
         </div>

         {userDetails ? (
            <div className="flex pr-4 pt-4  min-w-[15%] sm:min-w-[35%] md:min-w-[25%] items-center justify-center sm:justify-start sm:pt-0 md:justify-start md:pt-0">
               <div>
                  <button
                     className="text-white font-bold p-1 px-2 mr-4 bg-slate-600 rounded-md hover:bg-slate-800"
                     onClick={toggleGPT}
                  >
                     GPT
                  </button>
               </div>
               <div>
                  <button
                     onClick={handleSignOut}
                     className="text-white font-bold p-1 px-2 bg-slate-600 rounded-md hover:bg-slate-800"
                  >
                     SignOut
                  </button>
               </div>
            </div>
         ) : null}
      </div>
   );
};

export default Header;
