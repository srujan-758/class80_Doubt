import firebase from 'firebase'
require('@firebase/firestore')


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAbMBpQyLTzEuXrau9Vj5V_Nc9jcAv1L1k",
    authDomain: "book-santa-890f3.firebaseapp.com",
    projectId: "book-santa-890f3",
    storageBucket: "book-santa-890f3.appspot.com",
    messagingSenderId: "308051070937",
    appId: "1:308051070937:web:fab2be76269bbbd92053c8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore()