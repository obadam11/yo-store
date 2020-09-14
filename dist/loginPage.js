"use strict";
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
var signIn = function (email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function () {
        console.log("👍👍👍");
    })
        .catch(function (err) {
        console.log(err);
    });
};
var email = document.querySelector("#email").value;
var password = document.querySelector("#password").value;
var loginButton = document.querySelector("#login");
loginButton.onclick = function () {
    signIn(email, password);
    console.log('everything worked');
};
