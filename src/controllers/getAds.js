const Orders = require('../models/order');

module.exports = function(data,callback){
    Orders.find(data).sort({created: 'descending'}).exec((err,data) => {
        if(err) callback(true);
        else callback(false,data);
    });
}