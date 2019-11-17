const functions = require('firebase-functions');
const express = require('express');
const app = express();
const port = 5001;

app.listen(port, function(){
    console.log("Listening to port"+port);
});

app.get('/ping',(req,res)=>{
    res.send("Of course I still love you");
});

exports.app = functions.https.onRequest(app);


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
