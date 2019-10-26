import firebase from "firebase"



const config = {
    apiKey: "AIzaSyDUqEXRXyepvQZtDRXDaNu6I9kdLlO4hHI",
    authDomain: "secualert-cd941.firebaseapp.com",
    databaseURL: "https://secualert-cd941.firebaseio.com",
    projectId: "secualert-cd941",
    storageBucket: "secualert-cd941.appspot.com",
    messagingSenderId: "782760178748",
    appId: "1:782760178748:web:9ae6f2cbb70be7cedebf39",
    measurementId: "G-QPNH96LKTE"
};

firebase.initializeApp(config)



export const f = firebase;
export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();

