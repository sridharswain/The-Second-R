var mongoose = require("mongoose");
module.exports = mongoose.model("user",mongoose.Schema({
    name : String,
    email : String,
    password : String,
    address : String,
    phone : String,
    created : {
        type : Date,
        default : Date.now
    },
    orders : [{
        id : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'order'
        }
    }], 
}));