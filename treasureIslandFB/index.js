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