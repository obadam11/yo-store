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
// TODO:
// Get the all the data from the frontend
// using the DOM (document object model)
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        console.log("the user is: ", firebase.auth().id);
        //TODO:
        // Navigate to the feed page if signed in.
    }
    else {
        console.log("the user is not logged in: ");
        //TODO:
        //If not signed in, do something else.
    }
});
// Create a new account
var signUp = function (user) {
    // Step 1: Register user to Authentication system
    console.log(firebase.auth().currentUser);
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(function () {
        console.log("the auth worked");
    })
        .catch(function (err) {
        console.log("Auth err", err);
    });
    //Step2: Register user to our database
    firebase.firestore().collection("Users").doc(user.username).set({
        user: user
    })
        .then(function (docRef) {
        console.log("👍");
    })
        .catch(function (err) {
        console.log("DB err: ", err);
    });
};
// const signIn = (email: string, password: string): void => {
//     firebase.auth().signInWithEmailAndPassword(email, password).catch(function (err: string) {
//         console.log(err);
//     });
// }
var changePassword = function (newPass) {
    firebase.auth().currentUser.updatePassword(newPass)
        .then(function () {
    })
        .catch(function (err) {
        console.log(err);
    });
    firebase.firestore().collection('Users').doc(firebase.auth().currentUser.username).update({
        user: {
            password: newPass
        }
    })
        .then(function () {
        console.log("pass changed");
    })
        .catch(function (err) {
        console.log(err);
    });
};
var loginBtn = document.getElementById("complete_rig");
loginBtn.onclick = function () {
    //TODO:
    // Yousef will add the username and sex fields later
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var username = email;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var sex = 'male';
    var newUser = {
        email: email,
        password: password,
        username: username,
        phoneNumber: phoneNumber,
        firstName: firstName,
        lastName: lastName,
        sex: sex
    };
    signUp(newUser);
    console.log(newUser);
};
var registerNowBtn = document.getElementById("register_now_btn");
registerNowBtn.onclick = function () {
    //TODO:
    // Yousef will add the username and sex fields later
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var username = email;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var sex = 'male';
    var newUser = {
        email: email,
        password: password,
        username: username,
        phoneNumber: phoneNumber,
        firstName: firstName,
        lastName: lastName,
        sex: sex
    };
    signUp(newUser);
    console.log(newUser);
};
