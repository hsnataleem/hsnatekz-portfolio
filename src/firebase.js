// Import Firebase core
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // ✅ Firestore import

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANUlN-nVMPHp2SWyJLObm7I7V2Jo7i9RQ",
  authDomain: "hsnatekz-portfolio.firebaseapp.com",
  projectId: "hsnatekz-portfolio",
  storageBucket: "hsnatekz-portfolio.firebasestorage.app", // ⚠️ should be ".appspot.com"
  messagingSenderId: "482131845599",
  appId: "1:482131845599:web:9ce60041acf7bf3ce7646a",
  measurementId: "G-SDM1SKSWV1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// ✅ Initialize Firestore
export const db = getFirestore(app);
