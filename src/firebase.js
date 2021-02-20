import firebase from "firebase/app"
import "firebase/auth"

console.log(process.env.REACT_APP_FIREBASE_API_KEY)
const app = firebase.initializeApp({
    apiKey: "AIzaSyDzjL1WkQdFTjpTNvjrB248xy0oh2_F84c",
    authDomain: "war-fb443.firebaseapp.com",
    databaseURL: "https://war-fb443-default-rtdb.firebaseio.com",
    projectId: "war-fb443",
    storageBucket: "war-fb443.appspot.com",
    messagingSenderId: "758408036544",
    appId: "1:758408036544:web:367dcb3e95093ef1b36d25",
    measurementId: "G-JSVN1B6R31"
})

export const auth = app.auth()
export default app
