// File: /src/firebase-config.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCavIJm1-9Gcyn-MF3Jd5FHBglHz8Ka3kY",
  authDomain: "task-assigner-71720.firebaseapp.com",
  projectId: "task-assigner-71720",
  storageBucket: "task-assigner-71720.appspot.com",
  messagingSenderId: "977042785081",
  appId: "1:977042785081:web:95c7282b4b10da57411ee8",
  measurementId: "G-XT9L64WCRD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app); 
const analytics = getAnalytics(app);