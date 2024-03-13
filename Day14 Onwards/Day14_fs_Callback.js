//  working with files using fs and path module using call back hell i.e common js
const fs = require("fs")
// const fs = require("fs/promises")
console.log(fs);

// fs.writeFileSync("sameer.txt", "Sameer is a goood boy2",()=>{console.log('done 1');}) // excutes synchronously
// fs.writeFile("sameer2.txt", "Sameer is a goood boy3469",()=>{
//     console.log('done')
//     fs.readFile("sameer2.txt",(err, data)=>{
//         console.log(err, data.toString());
//     })
// }) // excutes asynchronously

fs.appendFile("sameer2.txt", " Sameer is busy in studying2", (e, d)=>{
    console.log(d);
})
console.log('done 2');


