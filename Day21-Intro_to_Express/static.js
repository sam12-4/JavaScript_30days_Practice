// express keeps security of our data so that our backend is not visible to end user or any hacker

express = require("express");
app = express();
port = 3000;

app.get("/", (req, res)=>{
    res.send("<h1>Listening to port<h1>")
})

app.listen((port), ()=>{
    console.log("listening to port", port);
})


app.use(express.static('public'))