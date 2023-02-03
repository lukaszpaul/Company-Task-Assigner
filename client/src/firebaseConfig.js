// File: /src/firebaseConfig.js

// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
// import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from 'firebase/auth'
import {getAuth} from 'firebase/auth'

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

// Initialize Firebase app and authentication
const app = initializeApp(firebaseConfig);
export const auth = getAuth();


// export const SignUpUser = (email, password ) => {
//   createUserWithEmailAndPassword(auth, email, password)
//     .then((cred) => {
//       console.log(`The User ${email} was created`, cred.user);
//       if(auth.currentUser) {
//         updateProfile(auth.currentUser, {
//           displayName: email,
//         });
//       }
//     }) 
//     .catch((err) => {
//       console.log(err);
//   })
// } // <--- SignUpUser() function ends here


// export const checkIfEmailExists = (email) => {
//   auth.fetchSignInMethodsForEmail(email)
//     .then((providers) => {
//       if (providers.length === 0) {
//         console.log(`The email ${email} does not exist`);
//       } else {
//         console.log(`The email ${email} exists`);
//       }
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }; // <--- checkIfEmailExists() function ends here

// export const SignInUser = (email, password) => {
//   signInWithEmailAndPassword(auth, email, password)
//   .then((cred) => {
//     console.log(`The User ${email} has been logged in`, cred.user);
//   }) // <--- signInWithEmailandPassword() function ends here
//   .catch((err) => {
//     console.log(err);
//   }) // <--- catch() block ends here

// } // <--- SignInUser() function ends here


export default app;