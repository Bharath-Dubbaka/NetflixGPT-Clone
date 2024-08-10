// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyBuas0PmNVEIT92hvpxdkprWTNbx13yxhY",
   authDomain: "flixgpt-a4760.firebaseapp.com",
   projectId: "flixgpt-a4760",
   storageBucket: "flixgpt-a4760.appspot.com",
   messagingSenderId: "168026704301",
   appId: "1:168026704301:web:6e769815c1fb5feac43924",
   measurementId: "G-T36XG5KHTQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

