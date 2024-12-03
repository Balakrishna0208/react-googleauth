// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCtyf6LbDIsOoJ892ybiOhR-YJ5V32fing",
    authDomain: "fir-auth-b9242.firebaseapp.com",
    projectId: "fir-auth-b9242",
    storageBucket: "fir-auth-b9242.firebasestorage.app",
    messagingSenderId: "218264754409",
    appId: "1:218264754409:web:bf8ccfa519411fff633878",
    measurementId: "G-3Z50FX1FQ0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };
