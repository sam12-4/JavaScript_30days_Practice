// async function getData(){
//     let x= await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     let data = await x.json()
//     return data.title
// }
// // settle means either promise is resolved or rejected
// //  resolve means promise has been settled successfully with a value
// //  reject means promise has not  been settled successfully and it contains an error
// async function main(){
//     let y = await getData()
//     console.log(y)
    
//     console.log('1');
//     console.log('3');
// }

// main()

//  making the dynamic website
let classArr = ["capsule", "title", "cName", "views", "months"]

// for (arr in classArr){
//     console.log(document.querySelector([`.${classArr[arr]}`]))
// }

// document.getElementById("dynamicBuilder").addEventListener("click",()=>{ 
//     console.log('clicked');
//     let i = 1;
//     for (i ; i<document.querySelector(".form").children.length; i+=2){
//         window.valuerb = document.querySelector(".form").children[i];
//         // for (arr in classArr){
//         //     document.querySelector([`.${classArr[arr]}`]).innerText = document.querySelector(".form").children[i].value ;
//         // }
        
//     }s
//     console.log(valuerb);
    
// })


prevent=(div, length)=>{
    alert(`please add value less than ${length} characters in the form of "${div.previousElementSibling.textContent}"`)
    throw new Error('Stopping execution by throwing an error');
    return
}

viewsConvert=(views)=>{
    if (parseInt(views)>1000 && parseInt(views)<1000000){
        return (views/1000).toFixed(1) + "k ";
    }
    else if (parseInt(views)>1000000){
        return (views/1000000).toFixed(1) + "M ";
    }
    else{
        return views
    }
}

noImg=()=>{
    alert('no image inserted therefore defaullt image inseretd');
   
    return ("hqdefault.webp")
    
}
dynamicBuilder= async ()=>{
    let image = document.getElementById("image")
    let uploadImage = document.getElementById("uploadImage")
    document.querySelector(".form").children[1].value
    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + `<div class="card">
            <div class="img">
                <img id="image" src="${uploadImage.files[0]? URL.createObjectURL(uploadImage.files[0]): noImg()}" alt="" srcset="">
                <div class="capsule">${document.querySelector(".form").children[3].value.length<6 ? document.querySelector(".form").children[3].value:prevent(document.querySelector(".form").children[3],6)}</div>
            </div>
            <div class="content">
                <div class="title">${document.querySelector(".form").children[1].value.length<40 ? document.querySelector(".form").children[1].value:prevent(document.querySelector(".form").children[1],40)}</div>
                <div class="one-line-content">
                    <div class="Cname">${document.querySelector(".form").children[5].value.length<20 ? document.querySelector(".form").children[5].value:prevent(document.querySelector(".form").children[5],20)}</div>
                    <div class="views">.${document.querySelector(".form").children[7].value.length<14 ? viewsConvert(document.querySelector(".form").children[7].value):prevent(document.querySelector(".form").children[7],14)}views</div>
                    <div id="monthsevent" class="months">.${document.querySelector(".form").children[9].value.length<14 ? document.querySelector(".form").children[9].value:prevent(document.querySelector(".form").children[9], 14)} months ago</div>
                </div>
            </div>
        </div>`
}



document.getElementById("dynamicBuilder").addEventListener("click",()=>{
    dynamicBuilder()
})