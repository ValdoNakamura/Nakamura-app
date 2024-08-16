// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuPTupBC-eeL8FBPrg5-UpmZI-rkSi7yw",
  authDomain: "nakamura-app-609df.firebaseapp.com",
  projectId: "nakamura-app-609df",
  storageBucket: "nakamura-app-609df.appspot.com",
  messagingSenderId: "467735759399",
  appId: "1:467735759399:web:6a2a49d50939f5f5119c02",
  measurementId: "G-K14FPKXTCT"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);


export default appFirebase