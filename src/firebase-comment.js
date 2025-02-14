import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCIYlnTSFhcBG751a4nMAsHqh7PJm4nRzY",
  authDomain: "itsrahulcv.firebaseapp.com",
  projectId: "itsrahulcv",
  storageBucket: "itsrahulcv.firebasestorage.app",
  messagingSenderId: "773660785565",
  appId: "1:773660785565:web:0a140cb6346d5954e88d74",
  measurementId: "G-Y3Q34T9L5S"
}; 

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };