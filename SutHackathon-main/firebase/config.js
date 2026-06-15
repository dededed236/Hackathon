// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEMdynBcobVVFUYKFnkPZPn-wAmeb2P3o",
  authDomain: "hackathin-83f90.firebaseapp.com",
  projectId: "hackathin-83f90",
  storageBucket: "hackathin-83f90.firebasestorage.app",
  messagingSenderId: "446975142390",
  appId: "1:446975142390:web:73516d81453d3dfa1effd7",
  measurementId: "G-23H6RG5DXF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);