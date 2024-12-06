import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFireStore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAPme0Rputomv4B0Np9uRg1FtJi5XbidFo",
  authDomain: "socialmedia-feed-signin.firebaseapp.com",
  projectId: "socialmedia-feed-signin",
  storageBucket: "socialmedia-feed-signin.firebasestorage.app",
  messagingSenderId: "326654175711",
  appId: "1:326654175711:web:bb8e2b6520c3f8d0f53c6a",
  measurementId: "G-ZEZG7TLDH6",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFireStore(app);

export { auth, db };
