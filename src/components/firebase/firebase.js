// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJxivw0yqfSzUBGqQL63KgH94J3rTuFGU",
  authDomain: "novelnest-507c9.firebaseapp.com",
  projectId: "novelnest-507c9",
  storageBucket: "novelnest-507c9.appspot.com",
  messagingSenderId: "980474715101",
  appId: "1:980474715101:web:112934ce7b79b1a9dbb434",
  measurementId: "G-ZRVHC2CQ5V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const googleAuthProvider = new GoogleAuthProvider();

export const auth = getAuth();
export default app;
