import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyApLz3MNqPqsuRQnmq-OFrBnJOFV7W7AT0",
  authDomain: "sikrispi-firebase.firebaseapp.com",
  projectId: "sikrispi-firebase",
  storageBucket: "sikrispi-firebase.firebasestorage.app",
  messagingSenderId: "772496845492",
  appId: "1:772496845492:web:2065cce889ba3312bc05e1",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
