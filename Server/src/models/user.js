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
            id : {
                type : mongoose.Schema.Types.ObjectId,
                ref : 'order'
            }
        }],
        default : []
    }
});
//userSchema.index({email : 1, type : -1});

module.exports = mongoose.model("user",userSchema);