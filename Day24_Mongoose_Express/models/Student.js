import mongoose from "mongoose"

const TeacherSchema = mongoose.Schema({
    Name : {type : String},
    Course : {type : String},
    Salary : { type  :Number , default : 30000}
})

export const Teacher = mongoose.model('Teacher', TeacherSchema);