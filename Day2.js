// JavaScript Program to Swap Two Variables

var v1 = 56;
var v2 = 78;
console.log("Before swapping:");
console.log("Value of v1 is : "+v1);
console.log("Value of v2 is :", v2);
console.log("After swapping:");
let temp = v1;
var v1 = v2;
var v2 = temp;
console.log("Value of v1 after swapping is : ", v1);
console.log("Value of v2 after swapping is : ", v2);

// Javascript Program to Solve Quadratic Equation
let root1, root2;
let a = 5
let b =  6;
let c = 5;

let discriminant = Math.pow(b, 2) - 4*a*c;
console.log(discriminant);

if (discriminant  > 0){
    root1 = (-b + Math.sqrt(discriminant))/ (2*a);
    root2 = (-b - Math.sqrt(discriminant))/ (2*a);
    console.log(`The roots are ${root1.toFixed(2)} and ${root2.toFixed(2)}`);
}
else if(discriminant == 0){
    root1 = root2 = -b/(2*a);
    console.log(`The roots are ${root1.toFixed(2)} and ${root2.toFixed(2)}`);
}
else{
    let realPart = (-b /(2*a)).toFixed(2);
    let imagpart = (Math.sqrt(-discriminant)/ (2*a)).toFixed(2);
    console.log('The roots are '+realPart+' + i'+imagpart + ' and ' + realPart + " - i" + imagpart);
}

// JavaScript Program to Convert Kilometers to Miles

let mile  = 0.621371; 
let km  = prompt("Enter the value in Kilometers")
alert ("The Value in miles is =" + (km * mile).toFixed(2) ) ;