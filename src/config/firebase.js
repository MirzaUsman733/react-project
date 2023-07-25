// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDw69kyiqUJjOH6qYQqm1xpXyPt6bbJ1CE",
    authDomain: "react-todo-usman.firebaseapp.com",
    projectId: "react-todo-usman",
    storageBucket: "react-todo-usman.appspot.com",
    messagingSenderId: "626954974917",
    appId: "1:626954974917:web:642f6298e0112f563c22ac",
    measurementId: "G-TTRJ0VXRJQ"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { analytics, auth, firestore }