import { initializeApp, } from "firebase/app";
import { getFirestore ,collection,doc, getDoc} from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword ,signOut } from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyBoCktZZ4TTsxGQkIyiPzhAfy6W3ptoar4",
    authDomain: "react-firebase-f5dd9.firebaseapp.com",
    projectId: "react-firebase-f5dd9",
    storageBucket: "react-firebase-f5dd9.appspot.com",
    messagingSenderId: "461533637267",
    appId: "1:461533637267:web:51a00a96f2ef31084c7b66"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth()
const db = getFirestore();
export {app,db, auth,collection,getDoc,doc, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged ,signOut};