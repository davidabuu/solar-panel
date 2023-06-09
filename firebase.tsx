import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDaV3g_p-LU7iMzaOUGlu0FsrZvfUXRgiw",
  authDomain: "solar-monitoring-9acf0.firebaseapp.com",
  databaseURL:
    "https://solar-monitoring-9acf0-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "solar-monitoring-9acf0",
  storageBucket: "solar-monitoring-9acf0.appspot.com",
  messagingSenderId: "328505116000",
  appId: "1:328505116000:web:04d517d71469a277064a05",
  measurementId: "G-E45WLSZ7WG",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
