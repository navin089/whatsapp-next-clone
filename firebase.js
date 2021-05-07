// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBeI_u4d8gBUsGCx6hr8-e5lxgAyE1JoyI",
  authDomain: "whatsapp-next-clone.firebaseapp.com",
  projectId: "whatsapp-next-clone",
  storageBucket: "whatsapp-next-clone.appspot.com",
  messagingSenderId: "964715741187",
  appId: "1:964715741187:web:ef6c0a9e4cd351afc74e36",
  measurementId: "G-X0SB2Y9X4V"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

  const db = app.firestore();
  const auth = app.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider };
