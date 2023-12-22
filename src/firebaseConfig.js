
import { getDatabase } from 'firebase/database';
import firebase from 'firebase/compat/app'


const firebaseConfig = {
  apiKey: "AIzaSyC4MDz3X6aFscHSYYUQJh2oBfjBPEy-lYU",
  authDomain: "esp-demo-17ed1.firebaseapp.com",
  databaseURL: "https://esp-demo-17ed1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "esp-demo-17ed1",
  storageBucket: "esp-demo-17ed1.appspot.com",
  messagingSenderId: "265923535250",
  appId: "1:265923535250:web:7c05882460f47b8682214b"
}


if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig);
}

export const rdb= getDatabase();