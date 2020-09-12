"use strict";
// TODO:
// Get the all the data from the frontend
// using the DOM (document object model)
var email = "test@gmail.com";
var password = "123456";
var username = "test_12";
var phoneNumber = "1234567890";
var firstName = "test";
var lastName = "Tasty";
var sex = 'male';
var user = {
    email: email,
    password: password,
    username: username,
    phoneNumber: phoneNumber,
    firstName: firstName,
    lastName: lastName,
    sex: sex
};
// Create a new account
var signUp = function (user) {
    // Step 1: Register user to Authentication system
    if (firebase.auth().currentUser) {
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(function () {
            console.log("the auth worked");
        })
            .catch(function (err) {
            console.log(err);
        });
        //Step2: Register user to our database
        firebase.firestore().collection("Users").add({
            user: user
        })
            .then(function (docRef) {
            console.log("👍");
        })
            .catch(function (err) {
            console.log("DB err: ", err);
        });
    }
};
var signIn = function (email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (err) {
        console.log(err);
    });
};
signUp(user);
