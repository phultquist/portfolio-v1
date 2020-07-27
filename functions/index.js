const functions = require('firebase-functions');
const express = require('express');
const app = express();

const path = require('path');
const fs = require('fs');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/home.html'));
});

exports.app = functions.https.onRequest(app);
