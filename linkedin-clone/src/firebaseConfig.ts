// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBYMmy0ime_UTIES9MYZ7_VT8cvH0T2WU",
  authDomain: "reactfirebase-b2dea.firebaseapp.com",
  databaseURL: "https://reactfirebase-b2dea-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "reactfirebase-b2dea",
  storageBucket: "reactfirebase-b2dea.appspot.com",
  messagingSenderId: "520185133808",
  appId: "1:520185133808:web:a6b52c59fe34b7d97d2035",
  measurementId: "G-DH9KV2YZ7R"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);