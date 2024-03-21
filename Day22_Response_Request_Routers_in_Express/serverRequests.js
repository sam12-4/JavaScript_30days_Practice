let express = require ("express");
let app = express();
let port = 3002;

//  In order to test post api we will use html file set in public folder and we will set the html file to serve in post method (see index.html in public folder)

app.use(express.static('public')) // will get the file of "/" in get request (and post request if defined in html file)

app.post("/", (req, res)=>{
    res.send("hi post")
})

app.get("/", (req, res)=>{
    res.send("hi")
})

app.get("/about", (req, res)=>{
    res.send("hi i am about")
})


app.listen(port , ()=>{
    console.log("listening");
})
