dynamicBuilder= async ()=>{
    webTitle = prompt("Enter title");
    webcName = prompt("Enter cName");
    webviews = prompt("Enter views");
    webmonths = prompt("Enter months");
    document.body.children[0].children[0].children[1].children[0].innerText = webTitle;
    document.body.querySelector(".one-line-content").childNodes[1].innerText= webcName;
    document.body.querySelector(".one-line-content").childNodes[3].innerText= webviews;
    document.body.querySelector(".one-line-content").childNodes[5].innerText= webmonths;
}

let image = document.getElementById("image")
let uploadImage = document.getElementById("uploadImage")
uploadImage.onchange= function(){
    image.src = URL.createObjectURL(uploadImage.files[0])
}

// webTitle = prompt("Enter title")
// dynamicBuilder(webTitle,  "Code with Sameer","32 views",  "3 months ago")