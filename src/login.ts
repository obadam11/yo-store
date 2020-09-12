declare var firebase: any;

type Sex = 'male' | 'female';

interface User {
    email: string;
    password: string;
    username: string;
    phoneNumber: string;
    firstName: string;
    lastName: string;
    sex: Sex;
}

// TODO:
// Get the all the data from the frontend
// using the DOM (document object model)

let email: string = "test@gmail.com";
let password: string = "123456";
let username: string = "test_12";
let phoneNumber: string = "1234567890";
let firstName: string = "test";
let lastName: string = "Tasty";
let sex: Sex = 'male';

const user: User = {
    email,
    password,
    username,
    phoneNumber,
    firstName,
    lastName,
    sex
}

// Create a new account
const signUp = (user: User): void => {
    // Step 1: Register user to Authentication system


    if (firebase.auth().currentUser) {
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(() => {
                console.log("the auth worked");
            })
            .catch((err: any) => {
                console.log(err)
            });


        //Step2: Register user to our database
        firebase.firestore().collection("Users").add({
            user
        })
            .then((docRef: any) => {
                console.log("👍");
            })
            .catch((err: any) => {
                console.log("DB err: ", err)
            })
    }

}

const signIn = (email: string, password: string): void => {
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (err: string) {
        console.log(err);
    });
}
signUp(user);



