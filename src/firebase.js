// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC440WXdRwlj7IOrrZG63IEHSmj6n59Pfk',
  authDomain: 'react-chat-f7a81.firebaseapp.com',
  projectId: 'react-chat-f7a81',
  storageBucket: 'react-chat-f7a81.appspot.com',
  messagingSenderId: '47003997300',
  appId: '1:47003997300:web:bb24166e7400936ce52d21',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)