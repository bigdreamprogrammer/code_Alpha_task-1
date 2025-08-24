const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const moredataSchema =new Schema({
    title:String,
    description:String,
    image:String,
    old_price:Number,
    new_price:Number,

});
const More_Data = mongoose.model("More_Data",moredataSchema);
module.exports = More_Data;