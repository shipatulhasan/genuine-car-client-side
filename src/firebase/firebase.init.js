// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWSaRVnfQvLuxuKdbm67bGSdWj-WduvmY",
  authDomain: "genuine-car-bb6d2.firebaseapp.com",
  projectId: "genuine-car-bb6d2",
  storageBucket: "genuine-car-bb6d2.appspot.com",
  messagingSenderId: "132401331940",
  appId: "1:132401331940:web:389b1162f10aafb42df6f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app