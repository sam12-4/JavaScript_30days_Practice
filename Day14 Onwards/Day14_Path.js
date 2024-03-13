import path from "path";
// console.log(path);
let myPath = "C:\\projects\\JavaScript Practice 30 Days Challenge\\JavaScript-30days-Practice\\Day14 Onwards\\sameer.txt";
console.log(path.extname(myPath));
console.log(path.dirname(myPath));
console.log(path.basename(myPath));
console.log(path.join("C:\\", "Programs//Sameer.txt" )); // will  return C:\Programs\Sameer.txt