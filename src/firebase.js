import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyApfWzmF60raRaelpfaYlIg3k3a-oas1hU",
    authDomain: "react-project-f359d.firebaseapp.com",
    projectId: "react-project-f359d",
    storageBucket: "react-project-f359d.appspot.com",
    messagingSenderId: "635573623383",
    appId: "1:635573623383:web:0ba5925f78f7bf251e2112"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);  // Initialize storage

export { auth, db, storage };  // Export storage