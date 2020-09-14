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

type Sex = 'male' | 'female';

interface User {
    email: any;
    password: any;
    username: any;
    phoneNumber: any;
    firstName: any;
    lastName: any;
    sex: Sex;
}

// TODO:
// Get the all the data from the frontend
// using the DOM (document object model)





firebase.auth().onAuthStateChanged((user: any) => {
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
})


// Create a new account
const signUp = (user: User): void => {

    // Step 1: Register user to Authentication system
    console.log(firebase.auth().currentUser);
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(() => {
            console.log("the auth worked");
        })
        .catch((err: any) => {
            console.log("Auth err", err)
        });


    //Step2: Register user to our database
    firebase.firestore().collection("Users").doc(user.username).set({
        user
    })
        .then((docRef: any) => {
            console.log("👍");
        })
        .catch((err: any) => {
            console.log("DB err: ", err)
        })
}

// const signIn = (email: string, password: string): void => {
//     firebase.auth().signInWithEmailAndPassword(email, password).catch(function (err: string) {
//         console.log(err);
//     });
// }

const changePassword = (newPass: string): void => {
    firebase.auth().currentUser.updatePassword(newPass)
        .then(() => {

        })
        .catch((err: any) => {
            console.log(err);
        })

    firebase.firestore().collection('Users').doc(firebase.auth().currentUser.username).update({
        user: {
            password: newPass
        }
    })
        .then(() => {
            console.log("pass changed");
        })
        .catch((err: any) => {
            console.log(err);
        })
}


let loginBtn: any = document.getElementById("complete_rig");
loginBtn.onclick = () => {

    //TODO:
    // Yousef will add the username and sex fields later

    let email: any = (document.getElementById("email") as HTMLInputElement).value;
    let password: string = (document.getElementById("password") as HTMLInputElement).value;
    let username: string = email;
    let phoneNumber: string = (document.getElementById("phoneNumber") as HTMLInputElement).value;
    let firstName: string = (document.getElementById("firstName") as HTMLInputElement).value;
    let lastName: string = (document.getElementById("lastName") as HTMLInputElement).value;
    let sex: Sex = 'male';

    const newUser: User = {
        email,
        password,
        username,
        phoneNumber,
        firstName,
        lastName,
        sex
    }

    signUp(newUser);
    console.log(newUser);
}
