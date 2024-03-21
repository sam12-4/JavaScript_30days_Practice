// Routes in express
const express = require("express");
const app = express();
const shop = require("./shop")
const blog = require("./blog")

app.get("/", (req ,res)=>{
    res.send("I am main app")
})

app.use('/blog', blog);
app.use('/shop', shop);

let port = 3000;

app.listen(port , ()=>{
    console.log("listening");
})