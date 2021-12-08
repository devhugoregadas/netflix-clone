import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyABr9RRqRH_bjkYy84dRQIwA7QabYj65C0",
  authDomain: "netflix-clone-d9712.firebaseapp.com",
  projectId: "netflix-clone-d9712",
  storageBucket: "netflix-clone-d9712.appspot.com",
  messagingSenderId: "170832501182",
  appId: "1:170832501182:web:c4f5471ca26bb23dcc01ef"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
