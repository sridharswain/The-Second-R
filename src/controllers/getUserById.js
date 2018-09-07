const User = require('../models/user');

module.exports = function(data, callback){
    User.findById(data, (err,user) => {
        console.log(user);
        callback((err || user == null),user);
    });
}