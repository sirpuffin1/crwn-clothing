import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD-hsPy8LzDNUD3_PraljOs4hmszvwdG94",
  authDomain: "crwn-clothing-db-753fc.firebaseapp.com",
  projectId: "crwn-clothing-db-753fc",
  storageBucket: "crwn-clothing-db-753fc.appspot.com",
  messagingSenderId: "573016936878",
  appId: "1:573016936878:web:2810b621cf3fae32eb383f",
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const fireBaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db)

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase())
    batch.set(docRef, object)
  })

  await batch.commit();
  console.log('batch is done writing')
}

export const getCategoriesAndDocuments = async () => {
  //create a reference to the desired collection in this case categories
  const collectionRef = collection(db, 'categories')
  // create a query based on the collection reference described above
  const q = query(collectionRef)
  // create a snapshot for the documents received from the query 
  const querySnapshot = await getDocs(q)
  // create a category map by using reducer to iterate over the queryied snapshots
 return querySnapshot.docs.map(docSnapshot => docSnapshot.data())
  
}

export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo
      });
    } catch (error) {
      alert(error.message)
    }
  }
  return userSnapshot;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserwithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async() => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)

export const getCurrentUser = () => {
  return new Promise((resolve, reject ) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    )
  })
}