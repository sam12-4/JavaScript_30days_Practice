import express from "express"
import cors from "cors"
import bodyParser from "body-parser";


const app = express();
let port = 3000;


app.use(cors())
app.use(bodyParser.json())

app.get("/", (req,res)=>{
    res.send("Hello World!");
    console.log("Get request");
})

app.post("/", async(req,res)=>{
    // console.log(typeof(req.body)); //print the data in req.body
    let data = await req.body
    // let parsedData = await JSON.stringify(data)
    // res.send(parsedData)
    res.send("Post request")
    console.log(typeof(data));
    console.log("post request");
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

