// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import  {getFirestore}  from 'firebase/firestore/lite';
import { getEnvironments } from "../helpers/getEnvironments";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// console.log(process.env);
const {
  VITE_APIKEY,
  VITE_AUTHDOMAIN,
  VITE_PROJECTID,
  VITE_STORAGEBUCKET,
  VITE_MESSAGINGSENDERID,
  VITE_APPID
} = getEnvironments();


// Your web app's Firebase configuration
//Dev/production
// const firebaseConfig = {
//   apiKey: "AIzaSyDqoXXcgL3ic3Q0AU-zKZAgzJsu6ZntlGA",
//   authDomain: "react-cursos-b9148.firebaseapp.com",
//   projectId: "react-cursos-b9148",
//   storageBucket: "react-cursos-b9148.appspot.com",
//   messagingSenderId: "187382072684",
//   appId: "1:187382072684:web:1a79b3f179ad637ab7df49"
// };

// Testing
const firebaseConfig = {
  apiKey: VITE_APIKEY,
  authDomain:  VITE_AUTHDOMAIN,
  projectId: VITE_PROJECTID,
  storageBucket: VITE_STORAGEBUCKET,
  messagingSenderId: VITE_MESSAGINGSENDERID,
  appId: VITE_APPID,
  // measurementId: "G-94M88544PQ"
};

console.log(firebaseConfig);

// Initialize Firebase.
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );