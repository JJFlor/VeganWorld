// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { onAuthStateChanged } from "firebase/auth";

// Escuchar cambios en el estado de autenticación
const listenToAuthChanges = (setUser) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);  // Usuario autenticado
    } else {
      setUser(null);  // No autenticado
    }
  });
};

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMo8Bo70s7UgzihktnkPuDs01S0MElVMQ",
  authDomain: "veganworld-4d847.firebaseapp.com",
  projectId: "veganworld-4d847",
  storageBucket: "veganworld-4d847.appspot.com",
  messagingSenderId: "973472197657",
  appId: "1:973472197657:web:5c81cef14a1858212e8e88",
  measurementId: "G-B25WHEEG08"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Initialize Firebase
const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result.user);
    })
    .catch((error) => {
      console.error(error);
    });
};

export { signInWithGoogle, listenToAuthChanges };



