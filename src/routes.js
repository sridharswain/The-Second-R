const register = require('./controllers/register');
const login = require('./controllers/login');
const checkEmailAvailable = require('./controllers/checkEmailAvailable');
const reply = require('./reply')

module.exports = function(app,db){

    //CHECK EMAIL AVAILABILITY
    app.get('/checkEmailAvailable',(req,res) => {
        checkEmailAvailable(req.query,(err,data) => {
            res.json(reply(err,data));
        })
    });

    //REGISTER THE USER IN DB
    app.post("/signup",(req,res)=>{
        register(req.body,db,function(err){
            if(err) res.json(reply(true,err));
            else res.json(reply(false,"User Added"));
        });
    });

    //USER LOGIN
    app.post("/signin",(req,res) => {
        login(req.body,db,(err,data) => {
            res.json(reply(err,data));
        });
    })
}