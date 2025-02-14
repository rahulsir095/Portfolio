import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIYlnTSFhcBG751a4nMAsHqh7PJm4nRzY",
  authDomain: "itsrahulcv.firebaseapp.com",
  projectId: "itsrahulcv",
  storageBucket: "itsrahulcv.firebasestorage.app",
  messagingSenderId: "773660785565",
  appId: "1:773660785565:web:0a140cb6346d5954e88d74",
  measurementId: "G-Y3Q34T9L5S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };