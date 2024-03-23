import mongoose from "mongoose"

let companySchema = new mongoose.Schema({
    name: {type: String},
    salary: {type: Number, default : 30000},
    language: {type: String},
    city:{type: String},
    isManager: {type: Boolean}
})

export const Company = mongoose.model("employee", companySchema)