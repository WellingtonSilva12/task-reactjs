import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDeaqsh4ZYhDJXGZiKVVasAIXwdIrqhkO8",
  authDomain: "todo-reactjs-87366.firebaseapp.com",
  projectId: "todo-reactjs-87366",
  storageBucket: "todo-reactjs-87366.appspot.com",
  messagingSenderId: "210072995608",
  appId: "1:210072995608:web:09ee62f4eebe203e33406d"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)