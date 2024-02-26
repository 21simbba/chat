import { initializeApp } from "firebase/app";
import { getFirestore,collection,addDoc,serverTimestamp, onSnapshot,query } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCaMNIN0HA_TbYz4oBjESDc9NPk_ONdFY4",
  authDomain: "chat-f9674.firebaseapp.com",
  projectId: "chat-f9674",
  storageBucket: "chat-f9674.appspot.com",
  messagingSenderId: "880218322267",
  appId: "1:880218322267:web:a0b06c5197bb90035bd67e"
};

initializeApp(firebaseConfig)

const firestore = getFirestore()

const MESSAGES = 'messages'

export{
    firestore,
    collection,
    addDoc,
    serverTimestamp,
    MESSAGES,
    query,
    onSnapshot,
}

