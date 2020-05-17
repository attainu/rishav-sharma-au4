import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

var config = {
  apiKey: "AIzaSyBZzKqJ-10XSysI12kYBy3efnKAh7qagzI",
  authDomain: "fprttrelloiskrello.firebaseapp.com",
  databaseURL: "https://fprttrelloiskrello.firebaseio.com",
  projectId: "fprttrelloiskrello",
  storageBucket: "fprttrelloiskrello.appspot.com",
  messagingSenderId: "711245791309"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();
const db = firebase.database();

export { auth, db };
