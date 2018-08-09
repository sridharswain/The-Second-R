module.exports = function(app,db){
    app.post("/register",(req,res)=>{
        console.log(req.body.user);
        res.send("Hello World");
    });
}