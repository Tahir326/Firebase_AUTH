// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBVLAel-xdPSh9NYHWYmMp9QG_HKXMfD4Q",
  authDomain: "authentication-firebase-39d3b.firebaseapp.com",
  projectId: "authentication-firebase-39d3b",
  storageBucket: "authentication-firebase-39d3b.appspot.com",
  messagingSenderId: "578794674915",
  appId: "1:578794674915:web:3d6dd8b6ad49011a7b83d6",
  measurementId: "G-YT79WP0TPJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {auth,app}