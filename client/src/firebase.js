// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-clone-1c5f5.firebaseapp.com",
  projectId: "mern-blog-clone-1c5f5",
  storageBucket: "mern-blog-clone-1c5f5.appspot.com",
  messagingSenderId: "501718148561",
  appId: "1:501718148561:web:8755949c9de415046e6cf0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


