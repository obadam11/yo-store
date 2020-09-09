declare const firebase: any;

var firebaseConfig = {
    apiKey: "AIzaSyAz8HtrKT-UiKutaaOXs1Kwfg2IdNTrovk",
    authDomain: "yo-project-68c34.firebaseapp.com",
    databaseURL: "https://yo-project-68c34.firebaseio.com",
    projectId: "yo-project-68c34",
    storageBucket: "yo-project-68c34.appspot.com",
    messagingSenderId: "748825923070",
    appId: "1:748825923070:web:294e68a40f6a6f4c61c4af",
    measurementId: "G-TZWJZYZ157"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

console.log("hey there");

db.collection("Test").doc("new").set({
    "worked": true
})
    .then(() => {
        console.log("worked")
    })
    .catch((err: any) => {
        console.log(err);
    })