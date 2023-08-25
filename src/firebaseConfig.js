// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdh_Ub85FSK3pew-os19d6iYzEZ6sPfGs",
  authDomain: "expense80.firebaseapp.com",
  projectId: "expense80",
  storageBucket: "expense80.appspot.com",
  messagingSenderId: "670239158466",
  appId: "1:670239158466:web:aca18ca833f4f1d9524b5b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth  = getAuth(app);
