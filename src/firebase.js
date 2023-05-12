import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAQ3DuKasWYhjFGG0-uGHArzMfH6SXVjok",
  authDomain: "disneyplus-clone-6c909.firebaseapp.com",
  projectId: "disneyplus-clone-6c909",
  storageBucket: "disneyplus-clone-6c909.appspot.com",
  messagingSenderId: "41014285725",
  appId: "1:41014285725:web:88174c63499b69b4bdcb74",
  measurementId: "G-9D5MW7MX6J",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
