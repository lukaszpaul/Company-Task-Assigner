// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQ8nqOY0gnIILlqvwbAapdmqqi2MsMwSg",
  authDomain: "company-task-assigner.firebaseapp.com",
  projectId: "company-task-assigner",
  storageBucket: "company-task-assigner.appspot.com",
  messagingSenderId: "1025118293724",
  appId: "1:1025118293724:web:9c8fcd955153b2090fae19",
  measurementId: "G-703MF44RLG"
};

// Initialize Firebase
const fire = initializeApp(firebaseConfig);
const analytics = getAnalytics(fire);

export default fire;