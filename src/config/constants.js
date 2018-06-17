import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCMGAw2E__FMdK7QvHVBXJzadzETPMR1M0",
  authDomain: "react-redux-firebase-df4d1.firebaseapp.com",
  databaseURL: "https://react-redux-firebase-df4d1.firebaseio.com",
  projectId: "react-redux-firebase-df4d1",
  storageBucket: "react-redux-firebase-df4d1.appspot.com",
  messagingSenderId: "706730733917"
};

firebase.initializeApp(config);

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
