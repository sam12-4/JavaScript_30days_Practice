// Javascript Program to Generate a Random Number
let randomNumber = Math.floor(Math.random()*(10-1))+1;
console.log("Random value between 1 and 10 is",randomNumber);

// Javascript Program to Check if a number is Positive, Negative, or Zero
let number = 54

if (number > 0) {
    console.log(`${number} is greater than zero`)
}
else if(number === 0){
    console.log(`${number} is equal to zero`)
}
else{
    console.log(`${number} is less than zero`)
}

// Javascript Program to Check if a Number is Odd or Even

let  num = 7;
if (num%2 === 0){
    console.log("The number is even");
}else{
    console.log("The number is odd");
}

// Using Ternary Operator
const result = (num%2 ==0) ? "even" : "odd";
console.log(result);

// JavaScript Program to Find the Largest Among Three Numbers
let num1 = 10;
let num2 = 20;
let num3 = 30;

let nums = {
    num1: 10,
    num2: 20,
    num3: 30
};

let numbers = [];

for (let i = 1; i <= 3; i++) {
    numbers.push(nums[`num${i}`]);
}

console.log(numbers);


// Filtering
// const arr = [1,2,5,7,9,4,24,6,2,53,24,2,1]

// const list = arr.filter((item)=>
//    (item>5)
// )

// console.log(list)

// Faulty Calculator
// let a1 = prompt("Enter First Number");
// let op = prompt("Enter Operation");
// let a3 = prompt("Enter Third Number");
// let random = Math.random();

// let obj = {
//     "+" : "-",
//     "-" : "+",
//     "*" : "/",
//     "/" : "**"
// }
// console.log(obj["+"])
 
// let result1;
// if (random>0.1){
//     result1 = `The result is ${eval(`${a1}${op}${a3}`)}`
//     alert(result1)
// }
// else{
//     result1 = `The result is ${eval(`${a1}${obj[`${op}`]}${a3}`)}`
//     alert(result1)
// }

// Business Name Generator

adjectives = "Crazy"
shopName = "Engine","Foods","Garments"
anotherWord = "Bros","Limited","Hub"
console.log(adjectives[0])

a = 2;
switch (a){
    case 2 :
        console.log("2 found")
}

const arr = [1,2,5,7,9,4,24,6,2,53,24,2,1]

// for in gives key, for of gives value

for (i in arr){
    console.log(arr[i]);
}

arr.forEach(element => {
    console.log(element)
});

for (let index = 0; index < arr.length; index++) {
    console.log(arr[index])
}

sameer = "Succeeded"

while (sameer !== "Succeeded"){
    console.log("Very less time left pleae succeed")
}
// JavaScript notes till page 13 done