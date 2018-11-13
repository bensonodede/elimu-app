import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBQ37ZMMyQoGgor27TK6H4kqINU-IX9InE",
  authDomain: "elimu-app-f2cb5.firebaseapp.com",
  databaseURL: "https://elimu-app-f2cb5.firebaseio.com",
  projectId: "elimu-app-f2cb5",
  storageBucket: "elimu-app-f2cb5.appspot.com",
  messagingSenderId: "623531741844"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
