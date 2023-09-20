
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhWWBXoVBYyPCYNkRiABsrLg8V5YUP7oY",
  authDomain: "my-restaurant-project-1873e.firebaseapp.com",
  projectId: "my-restaurant-project-1873e",
  storageBucket: "my-restaurant-project-1873e.appspot.com",
  messagingSenderId: "1088080802383",
  appId: "1:1088080802383:web:addaecb0f029a2572df03a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);