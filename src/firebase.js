import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
  
    apiKey: "AIzaSyDLDGjGQGSvSgNOhEUG2ZP3bGMra1gZdT4",
    authDomain: "prima-future-db.firebaseapp.com",
    databaseURL: "https://prima-future-db.firebaseio.com",
    projectId: "prima-future-db",
    storageBucket: "prima-future-db.appspot.com",
    messagingSenderId: "646933822566",
    appId: "1:646933822566:web:180ce9987c7a98c93bc1a7",
    measurementId: "G-R7BTF2ZZCT"

});

const db = firebaseApp.firestore();

export { db };