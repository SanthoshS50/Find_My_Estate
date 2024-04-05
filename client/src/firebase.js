// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "find-my-estate.firebaseapp.com",
  projectId: "find-my-estate",
  storageBucket: "find-my-estate.appspot.com",
  messagingSenderId: "1000229233899",
  appId: "1:1000229233899:web:787a36a0fb348bcebecaae"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);