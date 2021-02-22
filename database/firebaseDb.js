import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAYkrN8zbB8_2ysGucn1cbSm_e2sfCIRr0",
    authDomain: "safetyhub-ec418.firebaseapp.com",
    databaseURL: "https://safetyhub-ec418.firebaseio.com",
    projectId: "safetyhub-ec418",
    storageBucket: "safetyhub-ec418.appspot.com",
    messagingSenderId: "1002480327063",
    appId: "1:1002480327063:web:fe219b49a6e7f30ce8ccd2"
    
  };

  firebase.initializeApp(firebaseConfig);

  firebase.firestore();
  
  export default firebase;