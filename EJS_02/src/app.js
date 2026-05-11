const express = require ('express');
const morgan = require('morgan');
const app = express ();

app.set("view engine","ejs");
// middlware
app.use(morgan("dev"))
// 
app.post("/api/auth/register", (req, res)=>{
    res.status(201).send({
        message:"User registered successfully!"
    })
})

app.get("/", (req, res)=>{
    res.render("index" , {message: "Aur kya haal Chaal hai"});
})
module.exports = app;
