// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAyYavnXcYL1l7gG2qCBmgpKgItlyRmpVo",
    authDomain: "doctors-portal-ff220.firebaseapp.com",
    projectId: "doctors-portal-ff220",
    storageBucket: "doctors-portal-ff220.appspot.com",
    messagingSenderId: "36792796091",
    appId: "1:36792796091:web:8117dfae53b5a5215b3a9e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
