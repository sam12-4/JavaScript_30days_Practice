import express from "express";
import mongoose from "mongoose";
import { generateRandomData } from "./public/test.js";
import { EmployeeModel } from "./public/Schema.js";

const app = express();
const port = 3000;

mongoose.connect("mongodb://localhost:27017/company").then(() => {
    console.log("MongoDB connected");
}).catch((err) => {
    console.error("MongoDB connection error:", err);
});

app.get("/", (req, res)=>{
    res.sendFile("views/index.html", {root : process.cwd()})
})

app.post("/saveData", async (req, res) => {
    try {
        for (let index = 0; index < 10; index++) {
            await generateRandomData();
        }
        res.status(200).send("Data saved successfully");
    } catch (error) {
        console.error("Error saving data:", error);
        res.status(500).send("Internal server error");
    }
});

app.post("/deleteData", async (req, res) => {
    try {
        await EmployeeModel.deleteMany({})
    } catch (error) {
        console.error("Error saving data:", error);
        res.status(500).send("Internal server error");
    }
});

app.listen(port, () => {
    console.log("Server is running on port", port);
});
