"use client";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD63hodF2l2YG1qBYA3KrG_1lP6G34nHJY",
  authDomain: "duchuyhoangblog-5e5df.firebaseapp.com",
  databaseURL:
    "https://duchuyhoangblog-5e5df-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "duchuyhoangblog-5e5df",
  storageBucket: "duchuyhoangblog-5e5df.appspot.com",
  messagingSenderId: "1096120152389",
  appId: "1:1096120152389:web:a9dc5229dfdf01f9168e2c",
  measurementId: "G-B61M3RRE1T",
};

const app = initializeApp(firebaseConfig);

export default app;
