import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const fire_api = {
    apiKey: "AIzaSyAl5dBujR4yLWq5b7s51e0LxqeR-Nza4cE",
    authDomain: "crown-db-dfcd0.firebaseapp.com",
    databaseURL: "https://crown-db-dfcd0.firebaseio.com",
    projectId: "crown-db-dfcd0",
    storageBucket: "crown-db-dfcd0.appspot.com",
    messagingSenderId: "563250643909",
    appId: "1:563250643909:web:e4e033753b821111b781ac",
    measurementId: "G-XDB4EPPKNC"
  };

firebase.initializeApp(fire_api);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signinwithgoogle = () => auth.signInWithPopup(provider);  

export default firebase;