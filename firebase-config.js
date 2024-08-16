// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "firebase/analytics";

// Your web app's Firebase configuration
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
const db = getFirestore(appFirebase);

export { appFirebase, db };