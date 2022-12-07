import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  signInWithPopup,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD-hsPy8LzDNUD3_PraljOs4hmszvwdG94",
  authDomain: "crwn-clothing-db-753fc.firebaseapp.com",
  projectId: "crwn-clothing-db-753fc",
  storageBucket: "crwn-clothing-db-753fc.appspot.com",
  messagingSenderId: "573016936878",
  appId: "1:573016936878:web:2810b621cf3fae32eb383f",
};

// Initialize Firebase
const fireBaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)