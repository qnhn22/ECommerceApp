import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "fb-clone-2f9dc.firebaseapp.com",
    projectId: "fb-clone-2f9dc",
    storageBucket: "fb-clone-2f9dc.appspot.com",
    messagingSenderId: "460788431591",
    appId: "1:460788431591:web:ea720c9bd4e2ae9e5c0042",
    measurementId: "G-VLLNSS52T0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();


export default db
export { auth, provider }
