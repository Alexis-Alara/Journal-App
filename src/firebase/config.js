// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuceb00Hv0OBo9UdwCp3tjE5qo2Fbsatc",
  authDomain: "journal-app-2fc64.firebaseapp.com",
  projectId: "journal-app-2fc64",
  storageBucket: "journal-app-2fc64.appspot.com",
  messagingSenderId: "538971841198",
  appId: "1:538971841198:web:d6068920f9918dcd5f033f"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp )
export const FirebaseDB = getFirestore( FirebaseApp )