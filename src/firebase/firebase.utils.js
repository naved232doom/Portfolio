import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyCWsuTvyjjQ_crC7IBqMsYQSo4Ej06uLqg",
  authDomain: "portfolio-db-138c6.firebaseapp.com",
  projectId: "portfolio-db-138c6",
  storageBucket: "portfolio-db-138c6.appspot.com",
  messagingSenderId: "218746862036",
  appId: "1:218746862036:web:82f055bcfd440c816ebe41",
  measurementId: "G-6Z5V29BX2D",
};

firebase.initializeApp(config);