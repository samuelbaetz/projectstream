import firebase from 'firebase/app';
import "firebase/auth"
import "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyC5MpkK2f-J3u6ABDv3vRW1F9eTc-LVFmU",
    authDomain: "projectstream-c4349.firebaseapp.com",
    projectId: "projectstream-c4349",
    storageBucket: "projectstream-c4349.appspot.com",
    messagingSenderId: "705505378681",
    appId: "1:705505378681:web:41358a5afc86440310afa8",
    measurementId: "G-XDJFPED4MT"
  };
firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth
export const db = firebase.firestore()