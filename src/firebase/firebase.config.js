// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCBjPKjq766xF8i-mSk8maSgez61ruWt3c",
    authDomain: "iceland-ecommerce-react.firebaseapp.com",
    projectId: "iceland-ecommerce-react",
    storageBucket: "iceland-ecommerce-react.appspot.com",
    messagingSenderId: "609565412220",
    appId: "1:609565412220:web:1a696431d6bf799a4c72f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;