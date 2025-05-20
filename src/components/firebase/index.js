// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/app";
import "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5An42lEZ9he01tcCkvKs_kR8ya-fXZWc",
  authDomain: "react-website-b2c52.firebaseapp.com",
  projectId: "react-website-b2c52",
  storageBucket: "react-website-b2c52.appspot.com",
  messagingSenderId: "984956614885",
  appId: "1:984956614885:web:0a5e28376503cd4e41bc0c",
  measurementId: "G-L3N19KS731",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = firebase.storage();

export { storage, analytics, firebase as default };
