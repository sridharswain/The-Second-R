const User = require('../models/user');

module.exports = function(data, callback){
    User.findById(data.userId,(err, user) => {
        if(err || user == null){
            callback(true, "User not Found");
            return;
        }
        user.name = data.name;
        user.phone = data.phone;
        user.email = data.email;
        user.address = data.address;
        user.save((err, updatedUser) => {
            if(err){
                callback(true, "Failed to Update");
            }
            callback(false, updatedUser);
        });
    });
}