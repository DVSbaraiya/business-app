// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAGdRDTLoxSJcDScjv1IxVX3G3d2ogGY-4",
    authDomain: "personal-projects-7b9af.firebaseapp.com",
    projectId: "personal-projects-7b9af",
    storageBucket: "personal-projects-7b9af.appspot.com",
    messagingSenderId: "228620122588",
    appId: "1:228620122588:web:c66731bae6bada4c1df719",
    measurementId: "G-82XSEVDN28"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
// const analytics = getAnalytics(app);