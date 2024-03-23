import mongoose from "mongoose"

const EmployeeSchema = mongoose.Schema({
    name: {type: String},
    salary: {type: Number},
    language: {type: String},
    city: {type: String},
    isManager: {type: Boolean}
})

export const EmployeeModel = mongoose.model("employees", EmployeeSchema)

