// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAKEPcAovTGKGyLYt4IiWgtK2ePZV7VJJ0",
  authDomain: "gpms-9bf3e.firebaseapp.com",
  projectId: "gpms-9bf3e",
  storageBucket: "gpms-9bf3e.appspot.com",
  messagingSenderId: "552692924572",
  appId: "1:552692924572:web:5b051a734e7e2dd41d6d59"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;