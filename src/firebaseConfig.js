
import { getDatabase } from 'firebase/database';
import firebase from 'firebase/compat/app'


const firebaseConfig = {
  apiKey: "AIzaSyAGdMqXN4bvaWfuy1-XAIEdcIgNEERbhMg",
  authDomain: "appnew-232a9.firebaseapp.com",
  databaseURL: "https://appnew-232a9-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "appnew-232a9",
  storageBucket: "appnew-232a9.appspot.com",
  messagingSenderId: "645814436166",
  appId: "1:645814436166:web:dadf169ca110d1da74e547",
  measurementId: "G-LSKNGQN3S4"
}


if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig);
}

export const rdb= getDatabase();