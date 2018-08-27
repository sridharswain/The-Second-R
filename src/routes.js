const register = require('./controllers/register');
const login = require('./controllers/login');
const reply = require('./reply')

module.exports = function(app,db){

    //REGISTER THE USER IN DB
    app.post("/signup",(req,res)=>{
        register(req.body,db,function(err){
            if(err) res.send(reply(true,err));
            else res.send(reply(false,"User Added"));
        });
    });

    //USER LOGIN
    app.post("/signin",(req,res) => {
        login(req.body,db,(err,data) => {
            res.send(reply(err,data));
        });
    })
}