import { initializeApp } from "firebase/app";
import { get, getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyBEqJc5Yrzl8b_bRNYuLYFx1rWScVCQeUo",
  authDomain: "clone-ac804.firebaseapp.com",
  projectId: "clone-ac804",
  storageBucket: "clone-ac804.appspot.com",
  messagingSenderId: "563417005799",
  appId: "1:563417005799:web:a3f50768ac473488fdac42",
  databaseURL: "https://clone-ac804-default-rtdb.firebaseio.com/"
};
  
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app)