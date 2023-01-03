import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyADswxJI9IGu7CmACHXtaNQwWLcmnMl00Y",
    authDomain: "olx-react-3f373.firebaseapp.com",
    projectId: "olx-react-3f373",
    storageBucket: "olx-react-3f373.appspot.com",
    messagingSenderId: "837501186483",
    appId: "1:837501186483:web:596b2f45a6695a4e139bc6",
    measurementId: "G-JKWY32VP2W"
  };


export default firebase.initializeApp(firebaseConfig)