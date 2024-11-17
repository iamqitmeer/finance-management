import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const app = initializeApp({
  apiKey: "AIzaSyAz2t-SrFc9RHG8YptffvS28VFUTqOqEiY",
  authDomain: "twitter-clone-f37d2.firebaseapp.com",
  databaseURL: "https://twitter-clone-f37d2-default-rtdb.firebaseio.com",
  projectId: "twitter-clone-f37d2",
  storageBucket: "twitter-clone-f37d2.firebasestorage.app",
  messagingSenderId: "1046531084067",
  appId: "1:1046531084067:web:fac429e590042a6127c696",
});

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };
