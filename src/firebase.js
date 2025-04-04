import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAwpzH_7TCoyHgEKdEy8cmBycB8_cbETEE",
  authDomain: "clone-b7190.firebaseapp.com",
  projectId: "clone-b7190",
  storageBucket: "clone-b7190.firebasestorage.app",
  messagingSenderId: "655125658721",
  appId: "1:655125658721:web:25ddba6f2968adcfc0fe20",
  measurementId: "G-BD18T4PV9V",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
