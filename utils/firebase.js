import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0tYdknfMCHdEDpyzk1SDI7rG4j0fEYV4",
  authDomain: "mcnc-assignment.firebaseapp.com",
  projectId: "mcnc-assignment",
  storageBucket: "mcnc-assignment.appspot.com",
  messagingSenderId: "196184977364",
  appId: "1:196184977364:web:40782cf674e26152feb041"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {
  db,
}

