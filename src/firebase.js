// Import the necessary functions and classes from Firebase
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9W-we_9pOldbZPQXi6bydcOvNil_f-Kc",
  authDomain: "arvr-jackbox-a2-62717.firebaseapp.com",
  databaseURL: "https://arvr-jackbox-a2-62717-default-rtdb.firebaseio.com",
  projectId: "arvr-jackbox-a2-62717",
  storageBucket: "arvr-jackbox-a2-62717.appspot.com",
  messagingSenderId: "171702949535",
  appId: "1:171702949535:web:0b606710311645327474aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, GoogleAuthProvider };
