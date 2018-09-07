const register = require('./controllers/register');
const login = require('./controllers/login');
const checkEmailAvailable = require('./controllers/checkEmailAvailable');
const postAd = require('./controllers/postAd');
const getAds = require('./controllers/getAds');
const getUserById = require('./controllers/getUserById');
const googleSignIn = require('./controllers/googleSignin');
const reply = require('./reply');

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
    });

    //ADD NEW ORDER
    app.post('/addOrder',(req,res) => {
        res.send("Hello World");
    });

    //ADD NEW AD
    app.post('/postAd',(req,res) => {
        postAd(req.body,(err,data) => {
            if(err) res.json(reply(true,"Failed"));
            else res.json(reply(false,"Success"));
        });
    });

    //GET ALL POSTS
    app.get('/getAds',(req,res) => {
        getAds(req.query,(err,data) => {
            res.json(reply(err,data));
        });
    });

    //GET USER INFO WITH ID AS QUERY.
    app.get('/getUserById',(req,res) => {
        getUserById(req.query.id,(err,data) => {
            if(err) res.json(reply(true,"User Not Found"));
            else res.json(reply(false,data));
        })
    });

    //CHECK GOOGLE SIGNIN
    app.get('/googleSignIn',(req,res) => {
        googleSignIn(req.query.email,(err,data) => {
            res.json(reply(err,data));
        });
    });

    //DELETE POST
}