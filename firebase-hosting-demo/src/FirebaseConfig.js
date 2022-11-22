// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";

const FirebaseConfig = {
  apiKey: "AIzaSyBZ6Noe1o6jOlyIfYB3tJdvsszQu4-iqdE",
  authDomain: "umak-library-app.firebaseapp.com",
  projectId: "umak-library-app",
  storageBucket: "umak-library-app.appspot.com",
  messagingSenderId: "647090494095",
  appId: "1:647090494095:web:89ec331c741aacaac72efa",
  measurementId: "G-X9V93TBKDC"
};

// Initialize Firebase
const app = initializeApp(FirebaseConfig);
export const firestore = getFirestore(app);
 
//export {app, firestore};