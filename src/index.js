'use strict'
const express = require("express");
const routes = require("./routes");
const firebase = require("./firebaseinit");
const db = firebase.init();

const app = express();
routes(app,db);

app.get("/",(req,res)=>{
    const ref = db.ref('test');
    ref.child('a').set("Hll");
    res.send("Hello Worlds");
});

app.listen(8080,()=>{
    console.log("App Started on port 8080");
})