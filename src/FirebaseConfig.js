// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7JHpveMvLMQljQ-MkTq4-3aIZjmmLVN0",
  authDomain: "adminpanel-65635.firebaseapp.com",
  projectId: "adminpanel-65635",
  storageBucket: "adminpanel-65635.appspot.com",
  messagingSenderId: "678169595337",
  appId: "1:678169595337:web:460a8dca3231d381ad2c18",
  measurementId: "G-Q9PKGMXGCR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const authUser = getAuth(app);
export const provider = new GoogleAuthProvider();