let express = require("express")
const app = express();
let port= 3000;
app.set('view engine', 'ejs');

app.get("/",(req, res)=>{
    let siteName = "SameerStore";
    let contact = "Contact";
    let about = "About";about
    res.render('index', {siteName: siteName, contact : contact, about:about});
})

app.get("/file", (req, res)=>{
    res.sendFile("templates/index.html", {root: __dirname})
})

app.listen(port, ()=>{
    console.log("listening");
})