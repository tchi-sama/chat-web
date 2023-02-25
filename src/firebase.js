import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAkZs2Vo3029llfOWs4M63qIZ0BvTpreLM",
  authDomain: "web-chat-9b544.firebaseapp.com",
  projectId: "web-chat-9b544",
  storageBucket: "web-chat-9b544.appspot.com",
  messagingSenderId: "975059796790",
  appId: "1:975059796790:web:1ce54782c201073be52997",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
