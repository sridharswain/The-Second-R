const User = require('../models/user');

module.exports = function(data,callback){
    User.find(data)
        .exec((err,data) => {
            if(err) callback(true,"DB Failed");
            else callback(false,data.length < 1);
        });
}