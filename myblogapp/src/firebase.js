// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBETbF_0uVVulhv4gPrIZA9E3g1-tglRWk",
  authDomain: "mern-blog-28d95.firebaseapp.com",
  projectId: "mern-blog-28d95",
  storageBucket: "mern-blog-28d95.firebasestorage.app",
  messagingSenderId: "445681416061",
  appId: "1:445681416061:web:32c60b5819932da12f3e14"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);