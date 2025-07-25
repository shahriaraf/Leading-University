// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBr03bP4Rg0owJXX3AqaymFZE0PkkToSOU",
  authDomain: "leading-university-b11ee.firebaseapp.com",
  projectId: "leading-university-b11ee",
  storageBucket: "leading-university-b11ee.firebasestorage.app",
  messagingSenderId: "477926654736",
  appId: "1:477926654736:web:a2dbaa6ddda9fa1d651b95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);