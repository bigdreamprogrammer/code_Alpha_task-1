require('dotenv').config();
const mongoose = require("mongoose");
const initData = require("./crad_data.js");
const moreData = require("./more_data.js");
const Listing = require("../models/listing.js");
const More_data = require("../models/more_data_Schema");

const dbUrl = 'mongodb+srv://Dream:dream8485@electronics.ec4mpyu.mongodb.net/?retryWrites=true&w=majority&appName=Electronics';

// mongo url
main().then(()=>{
    console.log("connected to DataBase");
}).catch((err)=>{
    console.log(err);
});


async function main() {
    await mongoose.connect(dbUrl);
}

const initDB = async ()=>{
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
}
const moreDB = async ()=>{
    await More_data.deleteMany({});
    await More_data.insertMany(moreData.data);
    console.log("data was initialized for More_data");
}

initDB();
moreDB();