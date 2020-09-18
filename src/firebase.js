import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyBu5hcmT_kY19q25fUDDtQYsXXoXqH_OpU",
  authDomain: "clone-e375f.firebaseapp.com",
  databaseURL: "https://clone-e375f.firebaseio.com",
  projectId: "clone-e375f",
  storageBucket: "clone-e375f.appspot.com",
  messagingSenderId: "190143664669",
  appId: "1:190143664669:web:29a540574560c89ae82cf4",
  measurementId: "G-BKKNY6FGPK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
