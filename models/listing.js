const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listeningSchema =new Schema({
    title:String,
    description:String,
    image:String,
    old_price:Number,
    new_price:Number,

});
const Listing = mongoose.model("Listing",listeningSchema);
module.exports = Listing;
