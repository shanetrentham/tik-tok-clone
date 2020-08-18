import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBVQXS9-FIMP7X_dMAySHvI1xt1zjGXTWE",
    authDomain: "tik-tok-clone-13341.firebaseapp.com",
    databaseURL: "https://tik-tok-clone-13341.firebaseio.com",
    projectId: "tik-tok-clone-13341",
    storageBucket: "tik-tok-clone-13341.appspot.com",
    messagingSenderId: "815476396852",
    appId: "1:815476396852:web:776ef9c4319d10547d0b61",
    measurementId: "G-9NB3M3FWFH"
  };

  const firebaseApp = 
  firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;