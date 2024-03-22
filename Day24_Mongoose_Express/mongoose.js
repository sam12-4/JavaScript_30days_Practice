import express from "express"
import mongoose from "mongoose"
import {Teacher}  from "./models/Student.js"
const app = express()
let port = 3000
await mongoose.connect("mongodb://localhost:27017/")

app.get("/", (req, res)=>{
    let teacher = new Teacher({Name : "Sameer", Course : "COD"})
    teacher.save()
    res.send("Hi")
})

app.listen(port, ()=>{
    console.log("listening");
})