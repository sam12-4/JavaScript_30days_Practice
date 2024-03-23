import { EmployeeModel } from "./Schema.js"

let obj = {
    name: "",
    salary: "",
    language: "",
    city: "",
    isManager: ""
    }

const generateRandomValues= async()=>{
    let nameArr=await ["Sameer", "Anas", "Asad"]
    let randomSalary =await Math.floor(Math.random() * (50000+1));
    let languageArr=await ["Python", "Java", "C++"]
    let cityArr=await ["NewYork", "Karachi", "Dubai"]
    let randomManager =await Math.floor(Math.random() *2)
    let randomNumber =await Math.floor(Math.random() * 3);
    // console.log(randomNumber, randomManager, randomSalary);
    obj["name"] =await nameArr[randomNumber];
    obj["salary"] =await randomSalary;
    obj["language"] =await languageArr[randomNumber];
    obj["city"] = cityArr[randomNumber];
    obj["isManager"] =await (randomManager == 1 ? true : false);
    let model = new EmployeeModel(obj)
    model.save()
}

export const generateRandomData = generateRandomValues
    // console.log(obj[0]);   