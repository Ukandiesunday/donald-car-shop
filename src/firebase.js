import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "authentication-4cee2.firebaseapp.com",
  projectId: "authentication-4cee2",
  storageBucket: "authentication-4cee2.appspot.com",
  messagingSenderId: "362350554680",
  appId: "1:362350554680:web:22b98a548eca9e43de40cd",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
