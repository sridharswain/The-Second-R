'use strict'
const express = require("express");
const routes = require("./routes");
const firebase = require("./firebase");
//const db = firebase.init();
const db = require("mongoose");
db.connect("mongodb://localhost/thesecondrdb",function(err){
    if(err) throw err;
    else console.log("Connected to DB");  
});

const app = express();
app.use(express.json());
routes(app,db);

app.listen(8080,() => {
    console.log("App Started on port 8080");
})