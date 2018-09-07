const Order = require('../models/order');

module.exports = function(id,callback){
    Order.findByIdAndRemove(id,(err,res) => {
        if(err) callback(true);
        else callback(false);
    });
}