var mongoose = require("mongoose");
var userSchema = mongoose.Schema({
    name : String,
    email : {
        type : String,
        unique : true,
        index : true
    },
    password : String,
    address : String,
    phone : String,
    created : {
        type : Date,
        default : Date.now
    },
    orders : {
        type : [{
                type : mongoose.Schema.Types.ObjectId,
                ref : 'order'
        }],
        default : []
    }
});

module.exports = mongoose.model("user",userSchema);