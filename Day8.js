// document.addEventListener("keydown", (e)=>{
//     console.log(e.key)
// })
// document.querySelector(".one-line-content").addEventListener("click", (e)=>{
//     console.log(e)
// })

arr = [1,3,5,6,7,9]
newArr = arr.find(element => {
    return element>=5
});
console.log(newArr)
console.log('');
// alert('');

// Callback hell
anothercallback=(anotherfunction2)=>{
    console.log("another callback")
    anotherfunction2()
}
anothercallback2=(anotherfunction2)=>{
    console.log("another callback2")
}
callback=(name, anotherfunction)=>{
    console.log(name);
    anotherfunction(anothercallback2)
}

callback("Sameer",anothercallback)
let i = 0
// setInterval(()=>{
//     console.log("Sameer"+ i)
//     i +=1;
// }, 2000)

//  promisses

// let prom1 = new Promise((resolve,reject)=> {
//     Math.random()>0.5? setTimeout(()=>{
//         console.log('I am done 1');
//         resolve("Sameer 1") 
//     }, 2000) : reject("random number was less than equal to 0.5 therefore it is rejected 1")
    
         
// }).then((resolveValue)=>{
//     console.log(resolveValue);
// }).catch((err)=>{
//     console.log(err)
// }).finally(()=>{
//     console.log("this will always execute 1");
// })

let prom1 = new Promise((resolve,reject)=> {
    if (Math.random()>0.5){setTimeout(()=>{
        console.log('I am done 1');
        resolve("Sameer 1") 
    }, 2000)}
    else{
     reject("random number was less than equal to 0.5 therefore it is rejected 1")
    }
    
         
}).then((resolveValue)=>{
    console.log(resolveValue);
}).catch((err)=>{
    console.log(err)
})

let prom2 = new Promise((resolve,reject)=> {
    if (Math.random()>0.5){setTimeout(()=>{
        console.log('I am done 2');
        resolve("Sameer 2") 
    }, 1000)}
    else{
     reject("random number was less than equal to 0.5 therefore it is rejected 2")
    }
    
         
}).then((resolveValue)=>{
    console.log(resolveValue);
}).catch((err)=>{
    console.log(err)
})


// will only return values if both promisses are resolved
let p3 = Promise.all([prom1, prom2])
p3.then((value)=>{
    console.log(value);
    console.log("resolved");
}).catch((err)=>{
    console.log(err);
})


// will only return values if both promisses are working i.e willl give status and value
let p4 = Promise.allSettled([prom1, prom2])
p4.then((value)=>{
    console.log(value);
    console.log("resolved");
}).catch((err)=>{
    console.log(err);
})


// will tell which promisse will be resolved first
let p5 = Promise.race([prom1, prom2])
p5.then((value)=>{
    console.log(value);
    console.log("resolved");
}).catch((err)=>{
    console.log(err);
})



// promisse chaining is we know that we append  one promisse after other using .then
