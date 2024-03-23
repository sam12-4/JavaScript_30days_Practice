import mongoose from "mongoose"
import express from "express"
import { SaveData } from "./sendData.js"
import { Company } from "./models/mongooseSchema.js"
let app = express()
let port = 3000

mongoose.connect("mongodb://localhost:27017/company").then(()=>{
    console.log("Connected to mongo DB");
}).catch((err)=>{
    console.log(err);
})


app.get("/", (req, res)=>{
    res.sendFile("templates/index.html", {root : process.cwd()})
})


app.put("/save", (req, res)=>{
    for (let index = 0; index < 10; index++) {
        SaveData()
    }
})

app.delete("/delete", async(req, res)=>{
    await Company.deleteMany({})
})

app.listen(port, ()=>{
    console.log("listening")
})
