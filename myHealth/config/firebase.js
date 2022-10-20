// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLfD9nMyjlI8LA99mxkoflAPk6nJD20m0",
  authDomain: "myhealth-42baa.firebaseapp.com",
  projectId: "myhealth-42baa",
  storageBucket: "myhealth-42baa.appspot.com",
  messagingSenderId: "161240752166",
  appId: "1:161240752166:web:3eedb06cc2a5d3471b06e7",
  measurementId: "G-02BC7SWL06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth, app};
// const analytics = getAnalytics(app);