const express = require("express")
const routes = require("./routes")
const app = express();
routes();

app.get("/",(req,res)=>{
    res.send("Hello Worlds");
});

app.listen(8080,()=>{
    console.log("App Started on port 8080");
})