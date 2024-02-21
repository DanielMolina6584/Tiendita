// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBzytlcpaLFr0DmQXlzuR3G0irnt4qlPR0",
    authDomain: "tienda-dm2.firebaseapp.com",
    projectId: "tienda-dm2",
    storageBucket: "tienda-dm2.appspot.com",
    messagingSenderId: "707212119072",
    appId: "1:707212119072:web:8f244f0340fdff58fb0045"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Conectar un Google - autenticación
export const google = new GoogleAuthProvider();
// Initialize Cloud Firestore and get a reference to the service
export const dataBase = getFirestore(app);
export const facebook = new FacebookAuthProvider();