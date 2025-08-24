require('dotenv').config();
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const More_data = require("./models/more_data_Schema.js");
const session = require('express-session');
const MongoStore = require('connect-mongo');

app.use(express.static(path.join(__dirname,"/pulic")));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.urlencoded({extended:true}));

app.get('/favicon.ico', (req, res) => res.status(204));

const dbUrl = process.env.URL;

var sess = {
  secret: process.env.SECRET,
  cookie: {}
}

app.use(session(sess))

// Mongoose Connection
main().then(()=>{
    console.log("connected to DataBase");
}).catch((err)=>{
    console.log(err);
});

async function main() {
    await mongoose.connect(dbUrl);
}

app.use(session({
  store: MongoStore.create({
    secret: 'keyboard cat',
    mongoUrl: dbUrl,
  })
}));


// Root Route (Index file)
app.get("/", async(req, res) => {
    const data_card = await Listing.find({});
    const more_data = await More_data.find({});
    res.render("index.ejs",{data_card,more_data});

});


// View Route (View Page)
app.get("/Shop_now",async(req, res)=>{
    const more_data = await More_data.find({});
    res.render("view_page.ejs",{more_data});
})

// Laptop View Route (View Page)
app.get("/laptop_view",async(req, res)=>{
    const more_data = await More_data.find({});
    res.render("laptop.ejs",{more_data});
})

// Mobile View Route (View Page)
app.get("/mobile_view",async(req, res)=>{
    const more_data = await More_data.find({});
    res.render("mobile.ejs",{more_data});
})

// Drone View Route (View Page)
app.get("/drones_view",async(req, res)=>{
    const more_data = await More_data.find({});
    res.render("drone.ejs",{more_data});
})

// Drone View Route (View Page)
app.get("/tv_view",async(req, res)=>{
    const more_data = await More_data.find({});
    res.render("tv.ejs",{more_data});
})

// Watch View Route (View Page)
app.get("/watch_view",async(req, res)=>{
    const more_data = await More_data.find({});
    res.render("watch.ejs",{more_data});
})

// Buy and ID Route (Buy Page)
app.get("/:id",async(req, res)=>{
    const data_card_b = await Listing.find({});
    let {id} = req.params;
    const data_card = await Listing.findById(id);
    res.render("buy_page.ejs",{data_card,data_card_b});
})


// payment route
app.get("/:id/payment",(req, res)=>{
    res.render("payment.ejs");
})

app.get("/show/:id",async(req,res)=>{
    const more_data_b = await More_data.find({});
    let {id} =req.params;
    const more_data  =  await More_data.findById(id);
    res.render("buy_page2.ejs",{more_data,more_data_b});
})

// payment route
app.get("/show/:id/payments",(req, res)=>{
    res.render("payment.ejs");
})




// app.get("/listings/:id",async(req, res)=>{
//     let {id} = req.params;
//     const listing = await Listing.findById(id);
//     res.render("show.ejs",{listing});

// })
// app.get("/test", async(req,res)=>{
//     let sampleList = new Listing({
//         title: "Apple iPhone 15",
//         description:"This is a best brand in market and best phone in world.",
//         image:"/Image/Phone_image/image_1_iPhone.jpg",
//         price: 120000,
//     });
//     await sampleList.save();
//     console.log("Sample was Saved");
//     res.send("Successful testing");
// });


app.listen(8080,()=>{
    console.log("listing is start port: 8080");
});
