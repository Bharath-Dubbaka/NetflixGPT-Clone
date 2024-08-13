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
      <div className="absolute z-10 py-6 pb-10 px-16 bg-gradient-to-b from-black min-w-full flex justify-between">
         <div>
            <img src={appLogo} alt="appLogo" />
         </div>

         {userDetails ? (
            <div className="flex">
               <div>
                  <img
                     className="h-8"
                     src={userDetails?.photoURL}
                     alt="userPhotoURL"
                  />
               </div>
               <div className="text-white p-1 mx-2 hover:text-slate-400 font-bold">
                  Hi, {userDetails?.displayName}
               </div>
               <div>
                  <button
                     className="text-white font-bold p-1 px-2 mr-4 bg-slate-600 rounded-md hover:bg-slate-800"
                     onClick={toggleGPT}
                  >
                     GPTsearch
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
