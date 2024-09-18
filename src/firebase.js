// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqz-1CLfRtoixdqVy9i-ecC7VNfvz-Gs8",
  authDomain: "spotify-clone-app-c3e2e.firebaseapp.com",
  projectId: "spotify-clone-app-c3e2e",
  storageBucket: "spotify-clone-app-c3e2e.appspot.com",
  messagingSenderId: "452593525049",
  appId: "1:452593525049:web:779b28673976f8858e08e8",
  measurementId: "G-Q4R73YVQQC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);