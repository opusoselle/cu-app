// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9_dO4Q63aOuVpgy_mdZQF_0roKmAesEI",
  authDomain: "mobile-chat-app-b9483.firebaseapp.com",
  projectId: "mobile-chat-app-b9483",
  storageBucket: "mobile-chat-app-b9483.firebasestorage.app",
  messagingSenderId: "662683486225",
  appId: "1:662683486225:web:f805ecaf7bf9d113e1c9b0",
  measurementId: "G-1KC1ES55S8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
