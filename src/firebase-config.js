// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {Firestore, getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCbtNwzK3u47FZ5gDv35eNOrunX9bco04",
  authDomain: "blog-site-160bd.firebaseapp.com",
  projectId: "blog-site-160bd",
  storageBucket: "blog-site-160bd.appspot.com",
  messagingSenderId: "323403902792",
  appId: "1:323403902792:web:d6463c73cb069d48b98d7d",
  measurementId: "G-VVKVDFTNLG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()