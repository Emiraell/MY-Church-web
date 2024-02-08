// My database configuration file from firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDyvtG5sKHqPSe4is0W-79Aa24nJxbwk8Y",
  authDomain: "stpetersang-2ada7.firebaseapp.com",
  projectId: "stpetersang-2ada7",
  storageBucket: "stpetersang-2ada7.appspot.com",
  messagingSenderId: "1064106827374",
  appId: "1:1064106827374:web:9e1e6f6678e1ee9b2cd07f",
  measurementId: "G-1YDDMF99SK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getFirestore(app);
