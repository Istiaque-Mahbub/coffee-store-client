// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWEdhy5HUQpgeZW5oaHCVbmjWjREfWUXk",
  authDomain: "coffee-store-d4bd7.firebaseapp.com",
  projectId: "coffee-store-d4bd7",
  storageBucket: "coffee-store-d4bd7.firebasestorage.app",
  messagingSenderId: "617414007134",
  appId: "1:617414007134:web:e297559fd8857c428457cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
