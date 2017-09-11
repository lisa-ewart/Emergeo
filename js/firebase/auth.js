import Firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC0eVfyQE_wiC-mZ_bfpJdjlax_xJ8Tv_E",
    authDomain: "emergeo-4496e.firebaseapp.com",
    databaseURL: "https://emergeo-4496e.firebaseio.com",
    projectId: "emergeo-4496e",
    storageBucket: "emergeo-4496e.appspot.com",
    messagingSenderId: "613936575014"
};

const app = Firebase.initializeApp(config);
const auth = Firebase.auth();

export function createUser(email, password){

    auth.createUserWithEmailAndPassword(email, password).catch( function (error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
    
    });
}

auth.signInWithEmailAndPassword(email, password).catch(function (error) {


    const errorCode = error.code;
    const errorMessage = error.message;
    console.log('some error' + errorMessage);
    
});

auth.signOut().then(function () {
        // Sign-out successful.
    }).catch(function (error) {
        console.log('some error' + error.message);
    });