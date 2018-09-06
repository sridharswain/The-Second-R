'use strict'
const express = require("express");
const routes = require("./routes");
const firebase = require("./firebase");
//const firebasedb = firebase.init();

const db = require("mongoose");
//mongodb://localhost/thesecondrdb
db.connect("mongodb://admin:Sid25081998!@ds235352.mlab.com:35352/heroku_jcldcxq5",function(err){
    if(err) console.log(err)
    else console.log("Connected to DB");  
});

const app = express();
app.use(express.json());
routes(app,db);

app.listen(process.env.PORT || 8080,() => {
    console.log("App Started on port 8080");
})