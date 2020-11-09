import firebase from "firebase";
import * as dotenv from "dotenv";

dotenv.config();

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseUrl: process.env.FIREBASE_DATABASE_URL,
});

export default firebaseApp;
