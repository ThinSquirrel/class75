import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCmzSWcZ01-sC4cTtQD-6n9AciU6x-qq8g",
  authDomain: "class71-1e199.firebaseapp.com",
  projectId: "class71-1e199",
  storageBucket: "class71-1e199.appspot.com",
  messagingSenderId: "619419936447",
  appId: "1:619419936447:web:823ef49b9332c5cecc080a"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
