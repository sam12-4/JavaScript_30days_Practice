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
