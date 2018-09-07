var mongoose = require("mongoose");
module.exports = mongoose.model("order",mongoose.Schema({
    title : String,
    cost : Number,
    imageLink : {
        type : [{
            type : String
        }],
        default : []
    },
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user'
    },
    description : String,
    created : {
        type : Date,
        default : Date.now
    }
}));