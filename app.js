const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");


const MONGO_URl = "mongodb://127.0.0.1:27017/wanderlust"; 
 

main()
.then(()=>{
    console.log("connect to Db");
})
.catch((err)=>{
    console.log(err);
});
async function main(){
    await mongoose.connect(MONGO_URl);
}

app.get("/",(req,res)=>{
    res.send("Hi, I am root");
})

 app.get("/testListing",async (req,res)=>{
    let sampleListing  = new Listing ({
        title: "My New Villa",
        description: " By the beach",
        price:1200,
        lolcation: "Calangudte,Goa",
        country:"India",
    });
    await sampleListing.save()
    console.log("sample was saved");
    res.send("successful testing");
 })

app.listen(8080 ,()=>{
    console.log("server is listening to port 8080");
});