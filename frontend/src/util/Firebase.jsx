import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDV3SFBom7kU0vhks4a1KY__MPPidmrLgg",
  authDomain: "leetcode-clone-9e19b.firebaseapp.com",
  projectId: "leetcode-clone-9e19b",
  storageBucket: "leetcode-clone-9e19b.appspot.com",
  messagingSenderId: "673704094122",
  appId: "1:673704094122:web:f15a541bcda80b700723d3",
  measurementId: "G-BLCNJW1NWY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);