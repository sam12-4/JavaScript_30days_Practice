//  here i have used it using common js but we can use it in ecma script by using import path from "path"
let path = require("path")
console.log(path.dirname("C:\\projects\\JavaScript Practice 30 Days Challenge\\JavaScript-30days-Practice\\Day21"));
console.log(path.extname("C:\\projects\\JavaScript Practice 30 Days Challenge\\JavaScript-30days-Practice\\Day21.txt"));
console.log(path.basename("C:\\projects\\JavaScript Practice 30 Days Challenge\\JavaScript-30days-Practice\\Day21.txt"));
let newPath = path.join("C:", "/Sameer");
console.log(newPath);

// outputs
// C:\projects\JavaScript Practice 30 Days Challenge\JavaScript-30days-Practice
// .txt
// Day21.txt
// C:\Sameer