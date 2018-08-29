var mongoose = require("mongoose");
module.exports = mongoose.model("order",mongoose.Schema({
    title : String,
    cost : Number,
    imageLink : String,
    created : {
        type : Date,
        default : Date.now
    }
}));