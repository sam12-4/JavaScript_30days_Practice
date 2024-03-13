import fs from "fs/promises";
let  a = await fs.readFile("sameer.txt")
// console.log(a.toString());
let b = await fs.appendFile("sameer.txt", "\n\nappended")
let c = await fs.readFile("sameer.txt") 
console.log(c.toString());
