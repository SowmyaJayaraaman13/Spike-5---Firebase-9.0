// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAh2mRKSvPS8g4-fih-IGKhExdbt27DLCM",
  authDomain: "spike-5.firebaseapp.com",
  projectId: "spike-5",
  storageBucket: "spike-5.appspot.com",
  messagingSenderId: "363968949411",
  appId: "1:363968949411:web:a0569435ed094029902316",
  measurementId: "G-QG9D7KRWT2"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const db = getFirestore()
