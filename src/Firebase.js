import firebase from 'firebase'


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAYpL-QKSHCCaBtDzcReT81Oid31yGXFRg",
    authDomain: "clone-839b7.firebaseapp.com",
    databaseURL: "https://clone-839b7.firebaseio.com",
    projectId: "clone-839b7",
    storageBucket: "clone-839b7.appspot.com",
    messagingSenderId: "76185246215",
    appId: "1:76185246215:web:05800e9ecdcb3d36fc28a2",
    measurementId: "G-M3Z37JYPK4"
  });

const db = firebaseApp.firestore()
const auth = firebase.auth()
export {auth,db}