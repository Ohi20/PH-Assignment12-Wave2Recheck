// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDy-cEb-Yd4YO0lirPpkJTti8wo871J9_k",
  authDomain: "assignment-12-4bd06.firebaseapp.com",
  projectId: "assignment-12-4bd06",
  storageBucket: "assignment-12-4bd06.appspot.com",
  messagingSenderId: "748473953205",
  appId: "1:748473953205:web:6002c3dd1880c6dad907fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;