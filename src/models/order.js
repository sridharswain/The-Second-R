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
    description : String,
    created : {
        type : Date,
        default : Date.now
    }
}));