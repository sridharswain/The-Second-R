const User = require("../models/user");

module.exports = function(data,db,callback){
    User.find({email : data.email, password : data.password})
    .exec((err,users) => {
        if(err || users.length != 1) callback(true, "Invalid Login");
        else{
            const user = users[0];
            callback(false,{
                name : user.name,
                email : user.email,
                phone : user.phone,
                address : user.address,
                id : user._id
            });
        }
    });
}