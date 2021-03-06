declare var firebase: any;

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

const signIn = (email: string, password: string): void => {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            console.log("👍👍👍")
        })
        .catch(function (err: string) {
            console.log(err);
        });
}

let email: string = (document.querySelector("#email") as HTMLInputElement).value;
let password: string = (document.querySelector("#password") as HTMLInputElement).value;

const loginButton: any = document.querySelector("#login");

loginButton.onclick = () => {
    signIn(email, password);
    console.log('everything worked');
}