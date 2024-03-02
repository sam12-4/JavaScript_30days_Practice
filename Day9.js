async function getData(){
    let x= await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json()
    return data.title
}
// settle means either promise is resolved or rejected
//  resolve means promise has been settled successfully with a value
//  reject means promise has not  been settled successfully and it contains an error
async function main(){
    let y = await getData()
    console.log(y)
    
    console.log('1');
    console.log('3');
}

main()

