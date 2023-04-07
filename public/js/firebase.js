// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYcqV2zYv4jLGj-X5TeFmlFxA_u40VkVs",
  authDomain: "esp32-contador.firebaseapp.com",
  databaseURL: "https://esp32-contador-default-rtdb.firebaseio.com",
  projectId: "esp32-contador",
  storageBucket: "esp32-contador.appspot.com",
  messagingSenderId: "288089697594",
  appId: "1:288089697594:web:615e2d40fbcdbac84e3403"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);