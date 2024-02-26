//  Objects
obj = {
    name:"Sameer",
    "title" : "Succesfull"
};
// console.log(obj["title"]);
// console.log(obj.name);
// // Accessing the property of an object using
// obj.name = "Anas";
// obj.title = "CA";
// console.log(obj);
// console.log(obj["name"]);
// obj.salary = 50000
// console.log(obj);
// console.log(obj.salary);
// console.log(obj["salary"]);

let str = "Sameer"
// console.log(typeof (str))
array = ["Anas", "Asad", "alian", "alice"]
// Var is globally scoped, let is block scoped and const is  also block scoped but its value cannot be redecalred, similarly let is updated only but var is redeclared 
array.forEach(element => {
    console.log(element)
    
});


// function call(name){
//     return(`${name} is very good in programing `)
// }

call=(name)=>{
    return(`${name} is very good in programing `)
}

// a =  call
// console.log(a("Sameer"))
// Faulty calculator

var numArray = {
    "+":"-",
    "-":"+",
    "*":"/",
    "/":"**"
}

function calcResult(a, b, op, arr = numArray){
    for (i in arr){
        operator = arr[op]
        console.log(typeof operator);
    }
    console.log(eval(`${a}${operator}${b}`))
    return (eval(`${a}${operator}${b}`));
}
console.log(calcResult("7", "2", "+"));
console.log(eval("2+2"));
console.log(typeof calcResult);
