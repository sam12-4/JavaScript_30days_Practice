// Handling post & other requests
//  There are four tytpes of requests post. get, put, delete

let express = require ("express");
let app = express();
let port = 3000;

app.use(express.static('templates'))

app.post("/", (req, res)=>{
    res.send("hi post")
})

app.get("/", (req, res)=>{
    res.sendFile("templates/index.html", {root :__dirname})
})

app.listen(port , ()=>{
    console.log("listening");
})