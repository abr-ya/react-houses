import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const { API_KEY, PROJECT_ID } = process.env;

// Firebase configuration
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: `${PROJECT_ID}.firebaseapp.com`,
  projectId: PROJECT_ID,
  storageBucket: `${PROJECT_ID}.appspot.com`,
  messagingSenderId: "789257213229",
  appId: "1:789257213229:web:6a62f0b5d4c415fa0fafa4",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
