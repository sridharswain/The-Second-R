const User = require('../models/user');

module.exports = function(data,callback){
    User.find({email : data}).exec((err,data) => {
        if(err || data.length < 1) callback(true,"User Doesn't Exist");
        else callback(false, data[0]);
    });
}