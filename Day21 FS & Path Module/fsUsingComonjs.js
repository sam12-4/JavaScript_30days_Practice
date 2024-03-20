// using fs without promises

// let fs = require("fs")

// console.log("start");
// fs.writeFileSync("sameer2.txt", "Hi I am Sameer", ()=>{
//     console.log("async file written");
// })
// console.log("middle");
// fs.writeFile("sameer1.txt", "Hi I am Sameerw", ()=>{
//     console.log("done");
// })
// console.log("end");
// fs.readFile("sameer.txt",(error, data)=>{
//     // console.log("done1");
//     // console.log(error.toString());
//     console.log(data.toString());
// })


// using fs with promises

let fs = require("fs/promises")

console.log("start");
let  a = fs.readFile("sameer.txt",(error, data)=>{
    // console.log("done1");
    // console.log(error.toString());
    console.log(data.toString());
})
a.then((data)=>{
    console.log("done1");
    console.log(data.toString());
})
console.log("done2");

console.log(fs.readFile);

