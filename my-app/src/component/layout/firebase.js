import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGxAHmqopDgUkmM2_hkIkJethVSlf86lY",
  authDomain: "phone-login-7a008.firebaseapp.com",
  projectId: "phone-login-7a008",
  storageBucket: "phone-login-7a008.appspot.com",
  messagingSenderId: "156723550938",
  appId: "1:156723550938:web:0afae7910495565d30e3e3",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth=firebase.auth();
export const db=firebase.firestore();
export default firebase ;


