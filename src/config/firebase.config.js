
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const API_KEY = import.meta.env.VITE_API_KEY


const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "reservas-b7476.firebaseapp.com",
  projectId: "reservas-b7476",
  storageBucket: "reservas-b7476.appspot.com",
  messagingSenderId: "924726119607",
  appId: "1:924726119607:web:b740f9d11c75ec6eb05132"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app)

