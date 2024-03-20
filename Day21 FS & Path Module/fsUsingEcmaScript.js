import fs from "fs/promises"
console.log(fs);

console.log("start");
let a = await fs.readFile("sameer.txt");
console.log(a.toString());
console.log("done");

// console.log("start writing file");
// let b = await fs.writeFile("sameer3.txt", "this is Sameer 3")
// console.log("done writing file");

console.log("start appending file");
let b = await fs.appendFile("sameer3.txt", "\nthis is Sameer 3")
console.log("done appending file");
