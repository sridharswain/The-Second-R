const register = require('./controllers/register');
const reply = require('./reply')

module.exports = function(app,db){

    //REGISTER THE USER IN DB
    app.post("/register",(req,res)=>{
        register(req.body,db,function(err){
            if(err) res.send(reply(true,err));
            else res.send(reply(false,"User Added"));
        });
    });
}