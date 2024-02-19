// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import  {getFirestore}  from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqoXXcgL3ic3Q0AU-zKZAgzJsu6ZntlGA",
  authDomain: "react-cursos-b9148.firebaseapp.com",
  projectId: "react-cursos-b9148",
  storageBucket: "react-cursos-b9148.appspot.com",
  messagingSenderId: "187382072684",
  appId: "1:187382072684:web:1a79b3f179ad637ab7df49"
};

// Initialize Firebase.
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );