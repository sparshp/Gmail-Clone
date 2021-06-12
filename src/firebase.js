import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD41BNHndLE-fd8JCOlbetoBwVtMEPuMk4",
    authDomain: "sparsh-clone.firebaseapp.com",
    projectId: "sparsh-clone",
    storageBucket: "sparsh-clone.appspot.com",
    messagingSenderId: "27102658452",
    appId: "1:27102658452:web:70f9d564f6dfc8b9cc1981",
    measurementId: "G-T1W0P9N3HR"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig)
  const db= firebaseApp.firestore();
  const auth= firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export{ db, auth, provider};