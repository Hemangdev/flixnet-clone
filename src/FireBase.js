// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCMpBXO6FYCqgrKZlSIhfx0Xq6IDHutrA",
  authDomain: "flixnet-project.firebaseapp.com",
  projectId: "flixnet-project",
  storageBucket: "flixnet-project.appspot.com",
  messagingSenderId: "1068120300934",
  appId: "1:1068120300934:web:f78523f306c821dc71a007"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);