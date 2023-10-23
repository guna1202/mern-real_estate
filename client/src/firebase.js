// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-38c4b.firebaseapp.com",
  projectId: "mern-estate-38c4b",
  storageBucket: "mern-estate-38c4b.appspot.com",
  messagingSenderId: "856241186837",
  appId: "1:856241186837:web:49f76cb6a1a763c807c61c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
