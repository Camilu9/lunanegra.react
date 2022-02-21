// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDn3P22oVfq2zxMyiXfggjltDNJ1nZHruc",
    authDomain: "luna-coderhouse.firebaseapp.com",
    projectId: "luna-coderhouse",
    storageBucket: "luna-coderhouse.appspot.com",
    messagingSenderId: "112248087352",
    appId: "1:112248087352:web:f87e9eb1a4aee6692fd7cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const baseDatos = getFirestore(app);