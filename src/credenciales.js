import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAS3NDYLFiH5-Bzes7O3ZACZ64IoXiJOhY",
    authDomain: "instagram-app-47db2.firebaseapp.com",
    projectId: "instagram-app-47db2",
    storageBucket: "instagram-app-47db2.appspot.com",
    messagingSenderId: "782241219730",
    appId: "1:782241219730:web:b0b6da1897f74f4b02524b"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;