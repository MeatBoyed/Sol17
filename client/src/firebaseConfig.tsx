import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCBU3mZVcbyN2MDd0zgxE-bqPxwvg0C-qs",
    authDomain: "sol-17.firebaseapp.com",
    projectId: "sol-17",
    storageBucket: "sol-17.appspot.com",
    messagingSenderId: "793810952782",
    appId: "1:793810952782:web:3cceb79434b8198fef191f",
    measurementId: "G-PL04YWK255"
  };

firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore()
export default firebase
