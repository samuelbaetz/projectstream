import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app';
import "firebase/auth"
import {FirebaseAuthProvider} from '@react-firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyC5MpkK2f-J3u6ABDv3vRW1F9eTc-LVFmU",
  authDomain: "projectstream-c4349.firebaseapp.com",
  projectId: "projectstream-c4349",
  storageBucket: "projectstream-c4349.appspot.com",
  messagingSenderId: "705505378681",
  appId: "1:705505378681:web:41358a5afc86440310afa8",
  measurementId: "G-XDJFPED4MT"
};
ReactDOM.render(
  <React.StrictMode>
    <FirebaseAuthProvider firebase={firebase} {...firebaseConfig}>
    <App />
    </FirebaseAuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
