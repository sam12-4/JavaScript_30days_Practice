let express = require ("express");
let app = express();
let port = 3003;

//  In order to test post api we will use html file set in public folder and we will set the html file to serve in post method (see index.html in public folder)

app.use(express.static('public')) // will get the file of "/" in get request (and post, put, delete request if defined in html file)

app.post("/", (req, res)=>{
    res.send("hi post")
}).get("/", (req, res)=>{
    res.send("hi")
}).put("/put", (req, res)=>{
    res.send("hi i am put")
}).delete("/delete", (req, res)=>{
    res.send("hi i am delete")
}).listen(port , ()=>{
    console.log("listening");
})
