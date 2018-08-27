const register = require('./controllers/register');

module.exports = function(app,db){
    app.post("/register",(req,res)=>{
        console.log(req.body);
        register(req.body,db);
        res.send("Hello World");
    });
}