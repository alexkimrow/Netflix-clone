// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDn_RIsUP8Ha9fxjcWS0gTzWYqkz9ZN_TY",
    authDomain: "netflix-clone-d5a1b.firebaseapp.com",
    projectId: "netflix-clone-d5a1b",
    storageBucket: "netflix-clone-d5a1b.appspot.com",
    messagingSenderId: "563238920117",
    appId: "1:563238920117:web:ea127a4d1defc659d303fc"
};


// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };