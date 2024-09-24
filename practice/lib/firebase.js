import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAuKwOk23zqTp-BJltZNji9uCfAzG2dHeo",
  authDomain: "practice-fb-5e162.firebaseapp.com",
  databaseURL: "https://practice-fb-5e162-default-rtdb.firebaseio.com",
  projectId: "practice-fb-5e162",
  storageBucket: "practice-fb-5e162.appspot.com",
  messagingSenderId: "502175259886",
  appId: "1:502175259886:web:30de0b49b8ff12e2b267ff",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();
export const auth = getAuth();
