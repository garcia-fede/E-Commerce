import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyD6-Uy72ksuJjEuCRph7b5rcmjB9iEM9Qw",
    authDomain: "e-commerce-v2-e3945.firebaseapp.com",
    databaseURL: "https://e-commerce-v2-e3945-default-rtdb.firebaseio.com",
    projectId: "e-commerce-v2-e3945",
    storageBucket: "e-commerce-v2-e3945.appspot.com",
    messagingSenderId: "422258189149",
    appId: "1:422258189149:web:94bf85bf3cfe48b7f63eb4",
    measurementId: "G-Q6J1F44J0R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
