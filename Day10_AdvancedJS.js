// IIFE Function

async function checkPromise(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("promise resolved")
        }, 1000)
    })
}

(async function main(){
    a1 = await checkPromise()
    console.log(a1);
    a2 = await checkPromise()
    console.log(a2);
    

})()

// Destructuring Concept

let [x ,y, ...rest] = [1, 5, 7, 8, 9, 4, 6, 8, 5, 7, 6]
console.log(x,y, rest);

// assigning values of object to variables by destructuring only thoe with the specified name can be taken out not other name variables
const obj = {a:1 ,b:2, c:5}
const {a,b,c} = obj
console.log(a);
console.log(b);
console.log(c);

// Spread Syntax 
arr = [1, 3, 5, 5]
var obj1 = {...arr}
console.log(obj1);

function sum(a, b, c){
    return a+b+c
}
console.log(sum(arr[0], arr[1], arr[2]));// same answer of both

console.log(sum(...arr));// same answer of both

const e = "the"
const f = "no";
const d = {e, f};
console.log(d);

// Hoisting Concept
console.log(h);
// console.log(t);
console.log(j);
var h = " Hoisting Concept"
let t = " Hoisting Concept" // Hoisting not valid for let and const , in hoisting interpreter appears to move the declaration to the top of the code before execution
const j = " Hoisting Concept" // Hoisting not valid for let and const , in hoisting interpreter appears to move the declaration to the top of the code before execution
 