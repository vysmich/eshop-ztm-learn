import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBU5Q_SMmGpI5i9BJsLgBt-q3ucvnCIbXw",
  authDomain: "eshop-ztm-db.firebaseapp.com",
  projectId: "eshop-ztm-db",
  storageBucket: "eshop-ztm-db.appspot.com",
  messagingSenderId: "502191238733",
  appId: "1:502191238733:web:6d5d06b1c177d54c227604",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

const db = getFirestore();

export const createUserProfileDocument = async (userAuth) => {
  const userRef = doc(db, "users", userAuth.uid);
  console.log(userRef);

  const snapShot = await getDoc(userRef);
  console.log(snapShot);
  console.log(snapShot.exists());

  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }
};
