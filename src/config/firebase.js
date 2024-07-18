// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUX_F355uLj0mEwXLXeeyc-oy2BC_daPA",
  authDomain: "todo-app-216d0.firebaseapp.com",
  projectId: "todo-app-216d0",
  storageBucket: "todo-app-216d0.appspot.com",
  messagingSenderId: "821643793779",
  appId: "1:821643793779:web:e073584ac33f6a8e716106",
  measurementId: "G-PYGK1WEQQW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);