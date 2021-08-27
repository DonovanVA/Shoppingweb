import firebase from "firebase/app";
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyDxdBvJtjG8lUwqtkoEFv1qGkNtmSJAA0A",
    authDomain: "shoppingweb-21b02.firebaseapp.com",
    projectId: "shoppingweb-21b02",
    storageBucket: "shoppingweb-21b02.appspot.com",
    messagingSenderId: "352655660660",
    appId: "1:352655660660:web:c4de08be219ba164f02321",
    measurementId: "G-4DFM0PZY7V"
  });
  // Initialize Firebase
  export const auth = app.auth()
  export default app