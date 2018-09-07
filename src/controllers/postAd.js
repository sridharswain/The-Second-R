var Order = require('../models/order');
var User = require('../models/user');

module.exports = function(data,callback){
    var order = new Order({
        title : data.title,
        cost : data.cost,
        description : data.description,
        imageLink : data.imageLink,
        userId : data.userId
    });

    order.save((err,result) => {
        User.findByIdAndUpdate(data.userId,{$push : {orders : result._id}},{new : true},(err,newUserData) => {
            callback(err,result);
        });
    });
}