
try{
    let x =5
    let y = 5
    a = parseInt(x) + parseInt(y)
    if (typeof  a != "number" ){
        throw ReferenceError("This is not allowed")
    } 
    console.log(a);
    
    
}
catch(error){
    console.log(error.message)
}
finally{
    console.log('This will always run');
    
}

function checkfinally(){
    // let z= '10'
    let z= parseInt('10')
    try{
        if (typeof  z != "string") {
            return z
        }
        else{
            throw SyntaxError("error")
        }
    }
    catch(error){
        return error.message
    }
    finally{
        return "Now we get to know the use of finally clause"
    }
}

// means that we can return from the function twice using finally clause

console.log(checkfinally());
 