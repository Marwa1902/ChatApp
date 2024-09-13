import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chatapp-8d367.firebaseapp.com",
  projectId: "chatapp-8d367",
  storageBucket: "chatapp-8d367.appspot.com",
  messagingSenderId: "855962717078",
  appId: "1:855962717078:web:4e164e86d5a3dd9026ebb7"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage() //this is to store images of users
export const auth = getAuth() //login purposes
export const db = getFirestore() // db for storing user info

