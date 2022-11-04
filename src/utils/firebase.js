// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbl_S5V_0ROUzkrmn6u5JYohNpvLNVY9Y",
  authDomain: "coder-react-f9743.firebaseapp.com",
  projectId: "coder-react-f9743",
  storageBucket: "coder-react-f9743.appspot.com",
  messagingSenderId: "867189468243",
  appId: "1:867189468243:web:99231cabd8fb42aded2aa6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//crear una instancia de la base de datos
export const db = getFirestore(app);
