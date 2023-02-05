// File: /src/firebase-config.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyCQ8nqOY0gnIILlqvwbAapdmqqi2MsMwSg",
  authDomain: "company-task-assigner.firebaseapp.com",
  databaseURL: "https://company-task-assigner-default-rtdb.firebaseio.com",
  projectId: "company-task-assigner",
  storageBucket: "company-task-assigner.appspot.com",
  messagingSenderId: "1025118293724",
  appId: "1:1025118293724:web:9c8fcd955153b2090fae19",
  measurementId: "G-703MF44RLG"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyCavIJm1-9Gcyn-MF3Jd5FHBglHz8Ka3kY",
//   authDomain: "task-assigner-71720.firebaseapp.com",
//   projectId: "task-assigner-71720",
//   storageBucket: "task-assigner-71720.appspot.com",
//   messagingSenderId: "977042785081",
//   appId: "1:977042785081:web:95c7282b4b10da57411ee8",
//   measurementId: "G-XT9L64WCRD",
// };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
