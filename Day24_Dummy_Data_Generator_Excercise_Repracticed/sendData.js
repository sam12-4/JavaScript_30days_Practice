// import mongoose from "mongoose"
import { Company } from "./models/mongooseSchema.js"

let obj =  {
        name: "Harry",
        salary: 45000000,
        language: "Python",
        city: "New York",
        city: true
    }

let NameArr= ["Sameer", "Asad", "Anas"]
let langArr= ["Pyhton", "Java", "C++"]
let CityArr= ["Karachi", "NewYork", "Dubai"]

const sendDummyData = async ()=>{
    let randomSalary = await Math.floor(Math.random()*(50000+1))
    let randomNumber = await Math.floor(Math.random()*3)
    let managerProbability = await Math.floor(Math.random()*2) +1
    obj.name =  NameArr[randomNumber]
    obj.salary =  randomSalary
    obj.language =  langArr[randomNumber]
    obj.city = CityArr[randomNumber]
    obj.isManager = (managerProbability==1? false : true)
    let company = await new Company(obj);
    company.save()
}

export const SaveData = sendDummyData
