// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {addDoc, collection, getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_BASE_API_KEY,
  authDomain: "countries-app-4fb14.firebaseapp.com",
  projectId: "countries-app-4fb14",
  storageBucket: "countries-app-4fb14.appspot.com",
  messagingSenderId: "689684782081",
  appId: "1:689684782081:web:0a86c121fc7f3985027400",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);



const loginWithEmailAndPassword = async (email, password)=>{
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.log(error);
        alert(error.message);
    }
};

const registerWithEmailAndPassword = async(name, email, password)=>{
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "users"),{
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        })
    } catch (error) {
        console.log(error);
        alert(error.message);
    }
};

const logout = ()=>{
    signOut(auth);
};

export {auth, db, loginWithEmailAndPassword, registerWithEmailAndPassword, logout}; // Export the auth and db objects