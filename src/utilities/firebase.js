import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyBKRZnszgamx1DHiJga6gBKwpd1uT4xdko",
    authDomain: "vue3-aa11b.firebaseapp.com",
    projectId: "vue3-aa11b",
    storageBucket: "vue3-aa11b.appspot.com",
    messagingSenderId: "459972772616",
    appId: "1:459972772616:web:890b81fb3397866e5c62bd"
  };


  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();
      export const chatsRef = db.ref("chats");

  export default firebase;