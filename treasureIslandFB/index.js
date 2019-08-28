const functions = require('firebase-functions');
const express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors')
var admin = require('firebase-admin');
const firebaseHelper = require('firebase-functions-helper');
const firebase = require('./fbconfig/firebaseConfig');
var FieldValue = require('firebase-admin').firestore.FieldValue;

admin.initializeApp();

const firestore = admin.firestore();

const app = express();
app.use(cors())

// create application/json parser
var jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

/***********************************************************
                    API ENDPOINTS
***********************************************************/

app.get('/api/v1', (req, res) => {
    res.send("This is TreasureIsland Api")
});

//Create a new user: email, password, username
app.post('/api/v1/register', jsonParser, (req, res) => {
    firebase.auth().createUserWithEmailAndPassword(req.body.email, req.body.password)
        .then((userRecord) => {
            firebase.auth().currentUser.getIdToken(true)
                .then(token => {
                    firestore.collection('users').doc(userRecord.user.uid).set({
                        email: userRecord.user.email,
                        uid: userRecord.user.uid,
                        rid: []
                    })
                        .then(() => {
                            response = {
                                success: true,
                                accessToken: token,
                                email: userRecord.user.email,
                                status: 200,
                                message: `User: ${req.body.username} successfully created`
                            }
                            res.json(response)
                        })
                        .catch((error) => {
                            console.log('Error adding user to firestore:', error)
                            res.json(error)
                        })
                })
                .catch(error => {
                    console.log('Error cannot get token', error)
                    res.json(error)
                })

        })
        .catch((error) => {
            console.log('Error creating new user:', error)
            res.json(error)
        })
});
