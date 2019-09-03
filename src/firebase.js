// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7D9XYY5F8aU1DSnVaJDyrH-4zI19Jhz8",
  authDomain: "to-do-list-6ac5b.firebaseapp.com",
  databaseURL: "https://to-do-list-6ac5b.firebaseio.com",
  projectId: "to-do-list-6ac5b",
  storageBucket: "",
  messagingSenderId: "632657032177",
  appId: "1:632657032177:web:f639f68c280345e9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  login_hint: "user@example.com"
});

export const firestore = firebase.firestore();

export default firebase;
