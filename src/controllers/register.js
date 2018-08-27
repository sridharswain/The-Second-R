var User = require("../models/user")

module.exports = function(data,db,callback){
    var user = new User({
        name : data.name,
        email : data.email,
        phone : data.phone,
        address : data.address,
        password : data.password
    });

    user.save(function(err){
        if(err) callback("User Already Exists");
        else callback()
    });
}