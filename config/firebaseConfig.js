// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDj65Z4o5zadXfYOuvU-MLgFtTL59Nanw",
  authDomain: "dine-time-32049.firebaseapp.com",
  projectId: "dine-time-32049",
  storageBucket: "dine-time-32049.firebasestorage.app",
  messagingSenderId: "602928373727",
  appId: "1:602928373727:web:bcf2e5538e0eaeb2c56e6a",
  measurementId: "G-040TW3GM59"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);