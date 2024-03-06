// The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.


let magicalArr= ["Harry", "Hermoine", "Hagrid", "Snape", "DumbleDore", "Voldermort", "Abra Ka Dabra"]
const magicalSorting= async (magicalArr)=>{
    Gryffindor = magicalArr.filter((x)=>{return (x.length<6)})
    HufflePuff = magicalArr.filter((x)=>{return (x.length<8)})
    RavenClaw =  magicalArr.filter((x)=>{return (x.length<12)})
    Slytherin =  magicalArr.filter((x)=>{ return (x.length>= 12)})
    
}


magicalSorting(magicalArr)
console.log(Gryffindor);
console.log(HufflePuff);
console.log(RavenClaw);
console.log(Slytherin);


// The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.
let arr = [1, 3, 5, 6, 8, 9, 4] 
let newarr = arr.map((x)=>{
    return x*x
})
console.log(newarr);

const myArray = [1, 2, 3, 4, 2, 5, 6, 3, 1, 9, 4];
const duplicates = myArray.filter((item, index) => myArray.indexOf(item)=== index);
console.log(duplicates);

// reversing the string 
let string = "this is a string"

function reverse(string){
    // let value = "";
    // for (i=string.length-1; i>=0; i--){
    //     value += string[i]
    // }
    // return value;

    // another method
    let array = string.split(" ") 
    let reversed_array = array.reverse()
    return reversed_array.join(" ");

}
console.log(reverse(string));

const word = "Harry Bhai";
const mirrorWord = Array.from(word).reverse().join("")
console.log(mirrorWord)


// Password Validator
function passwordValidator(password){
    let checkLettersCapital = [ "A",  "B", "C",  "D", "e", "E", "f", "F", "g", "G", "h", "H", "i"," ", "j", "J", "k", "K"," ","l","L",  "m","M", "n", "N", "o","O","p", "P", "q","Q","r","R","s","S", "t", "T", "u", "U", "v", "V", "w", "W", "x", "X", "y", "Y", "z", "Z"] 
    let checkLettersSmall = ["a","b", "c", "d", "e", "f", "g", "h", "i" ,"j" ,"k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ]

    let checkdigit = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    // const numbers = /\d/g;
    // const specialCharacters = /[^a- zA-Z0-9]/g;
    // if (!lowerCaseLetters || ! upperCaseLetters || !numbers || !specialCharacters || password.length < 8  ){
    //     if ((password.match(lowerCaseLetters)) && (password.match (upperCaseLetters)) && (password.match (numbers)) && (password.match(specialCharacters))){
    //         return false;
    //     }
    //     else {
    //         return true;
    //     }
    //     }
    if (checkLettersCapital.some(item => password.includes(item)) && checkLettersSmall.some(item => password.includes(item)) && (password.length>=8) && checkdigit.some(item => password.includes(item))){
        console.log("condition satisfied");
        
    } 
    else{
        console.log("condition not satisfied");
    }

    }
passwordValidator("abcdAdasdac6")


// The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

let newArr = [2, 4, 6, 8, 9, 10, 7,-6,  8,-6, 8, 8]

let sum = 0
let index =0
function stopOnNegative(array){
    for (index in array){
        if (array[index]<0){
            break
        }
        else{
            sum += parseInt(array[index])
        }
    }
    return sum;
}
console.log(stopOnNegative(newArr));
let vowels =["a", "e", "i", "o", "u", "A", "E", "I", "O","U"]
let string1 = "strieng"
let count = 0;
for (ind in string1){
    if (vowels.includes(string1 [ind])) {
        count +=1
    }
}
console.log(count);

// The Local Storage Manager:
// You are working on a note-taking app, and you want to implement a function named saveNoteToLocalStorage that takes a note object and saves it to the browser's local storage.

function saveNoteToLocalStorage(note){
    localStorage.setItem("note", note)
}

let note = localStorage.getItem("note")

if (note){
    document.querySelector(".notes").innerHTML = note
}

document.getElementById("makeNote").addEventListener("click", ()=>{
    let note = prompt("Enter your Note here");
    saveNoteToLocalStorage(note)
    document.querySelector(".notes").innerHTML += note
})