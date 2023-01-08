import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Deska's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "deska-prod.firebaseapp.com",
    projectId: "deska-prod",
    storageBucket: "deska-prod.appspot.com",
    messagingSenderId: "813255090693",
    appId: "1:813255090693:web:7dbcb62dde13115b75726c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();