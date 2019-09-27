import Firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyD8V1blF66w1_OqNuaWbX0bz7qz0TmjLo0",
  authDomain: "library-a03ee.firebaseapp.com",
  databaseURL: "https://library-a03ee.firebaseio.com",
  projectId: "library-a03ee",
  storageBucket: "",
  messagingSenderId: "879335316982",
  appId: "1:879335316982:web:7baaeb3608bcaebb41fbd7",
  measurementId: "G-X7SZPM8DE9"
};
// Initialize Firebase
let app = Firebase.initializeApp(firebaseConfig);
let db = app.database();
// Firebase.analytics();
let LinksRef = db.ref("links");
export default LinksRef;
