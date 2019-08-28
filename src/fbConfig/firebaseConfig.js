import firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDR3rxFKcbDySnGJk3orIU_GiokqZ8UbOw",
    authDomain: "treasureisland-8ebec.firebaseapp.com",
    databaseURL: "https://treasureisland-8ebec.firebaseio.com",
    projectId: "treasureisland-8ebec",
    storageBucket: "treasureisland-8ebec.appspot.com",
    messagingSenderId: "736531721710"
};

firebase.initializeApp(config);

export default firebase;