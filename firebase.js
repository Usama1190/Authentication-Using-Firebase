// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCdt1KOECGCPLRyU75HQ_9Of8brnbT4aBU",
    authDomain: "authentication-user-70dc4.firebaseapp.com",
    projectId: "authentication-user-70dc4",
    storageBucket: "authentication-user-70dc4.appspot.com",
    messagingSenderId: "266757288143",
    appId: "1:266757288143:web:7c8527eab3369caba687ba",
    measurementId: "G-K158FZDXJ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword };