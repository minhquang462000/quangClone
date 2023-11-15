// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAt8N_5b1gdtn2FyR3dDiinmFoDty1Vayg",
  authDomain: "project2-rikkey.firebaseapp.com",
  projectId: "project2-rikkey",
  storageBucket: "project2-rikkey.appspot.com",
  messagingSenderId: "996363110441",
  appId: "1:996363110441:web:a8f8a007c47715662a7438",
  measurementId: "G-E4Q38VJKW0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storageFirebase =getStorage(app)