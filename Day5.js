// arrays are mutable
// strings are immutable
let arr = [1, 2, 4, 6, 7]
let arr2 = [5, 98, 4, 6, 7]
let arr3 = [5, 98, 4, 6, 7]
arr[0] = 5666
console.log(arr[0])
arr2 = [9,7,8,4]
console.log(arr.join(" and ")) //it doesnot change the array permenantly and returns the result in the form of string
console.log(arr.toString())
arr.pop()
console.log(arr)
arr.push(4)
console.log(arr)
arr.shift()
console.log(arr)
arr.unshift(5666)
console.log(arr)
// delete(arr[3]) // deletes the item on the array but doesnot delete the location such that if we use lenght property on that array will show the original length before deletion
console.log(arr)
// shift is the brother of pop and unshift is the brother of push
console.log(arr.concat(arr2, arr3).sort()) //here sort will modify the original array
console.log(arr)
console.log(arr.slice(1, 2) )
// arr.splice(1, 2) // first argument will take index to be deleted where as second argument will take items to delete
console.log(arr)
arr.splice(1 ,2 ,3 ,6 ,5 ,9) // After first and second  arguments we put how many elements to remove from that
console.log(arr)

// loops in array

// for of , for in and for each can be used  to loop through an array but only for in can be used to loop  through object properties

// for (let index = 0; index < arr.length; index++) {
//     console.log(arr[index]);
// }

// for (i of arr){
//     console.log(i)
// }
// for (i in arr){
//     console.log(arr[i])
// }


// for each will take value as the first argument, index as second and array as the third argument
arr.forEach((value, index, arr)=>{
    console.log(value*2, index, arr)
})

// map, filter, reduce
console.log ("map, filter, reduce start")
let newarr=[1,3,5,7,9,8,6,4,2]
// let newarr2 = []
//  for (const num in newarr){
//     newarr2.push(newarr[num]*2)
//  }
//  console.log(newarr2)

//   -- The above similar thing can be done using map ---

//  map will make a new array
// map will take value as the first argument, index as second and array as the third argument
// we can not modify our existing array, in order to modify it we should reinitialize our array but by default new arrays are made with map, filter, reduce 
newarr2 = newarr.map((value, index, array)=>{
    console.log(value, index,array )
    return value
})
console.log(newarr2)

let filterarr = [1, 4, 5, 7, 8, 9]
const greaterThanFive=(element)=>{
    if  (element>5){
        return true
    }
    else{
        return false
    }
}

newFilter = filterarr.filter(greaterThanFive)

redArray = [1,6,3,9,8,4]
redArray = redArray.reduce((a, b)=>{
    return a + b 
})
// reinitialized
console.log(redArray)

console.log(newFilter)
sam1 = [1, 4, 5] 
sam = sam1.filter(e=>{
    return e>=5
})
console.log(sam)

var factNum = 6
console.log("Factorial Excercise")
let  i = factNum
while(i > 1){
    factNum *= i-1
    i -= 1
}
console.log("while loop factorial is equal to "+factNum)
var num =1
for (v= 0 ; v<=9; v++){ 
    num =  num * (v-1<= 0 ? 1 : v-1)
    console.log(num)
}

redArray = [6, 5, 4, 3, 2, 1]

reduceResult = redArray.reduce((a,b)=>{
    return a*b
})

console.log(reduceResult)