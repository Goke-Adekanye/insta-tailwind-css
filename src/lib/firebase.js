import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import { seedDatabase } from "../seed";

//firebase config
const config = {
  apiKey: "AIzaSyDgjsZNUPSttxS1J0Wo-FmRVMPGyDyf2Ss",
  authDomain: "instagram-acffa.firebaseapp.com",
  projectId: "instagram-acffa",
  storageBucket: "instagram-acffa.appspot.com",
  messagingSenderId: "993648773413",
  appId: "1:993648773413:web:03395b4f88a3323d1e72cc",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

//seed the database
// seedDatabase(firebase);

export { firebase, FieldValue };
