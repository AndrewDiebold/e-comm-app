import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCg-DRrDkOAraXss79fnR_oMIqJoCCJ0Po",
  authDomain: "e-comm-app-db.firebaseapp.com",
  projectId: "e-comm-app-db",
  storageBucket: "e-comm-app-db.appspot.com",
  messagingSenderId: "543530286995",
  appId: "1:543530286995:web:54e9443267c5e9e7ca3266",
  measurementId: "G-96H3VMP1MN"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;