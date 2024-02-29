document.getElementsByClassName("box");
document.getElementsByClassName("box")[0].style.color = "white";
document.querySelectorAll(".box");
document.getElementsByTagName("div");
e = document.getElementsByTagName("div");
for (let index = 0; index < e.length; index++) {
    element = e[index];
    console.log(element)   ;
    
}

e[2].matches("#id-box") ;// returns  true or false if it exactly matches
e[2].closest(".container") ;// returns true if itself contains it or its parent contains it

// elemA.contains(elemB)  returns true if element A contains element B i.e checks the choildren of the parent
document.querySelector(".container").contains(e[2]);

//  Excercise

document.body.getElementsByTagName("div")[4].style.color = "blue";
document.body.getElementsByTagName("div")[4].style.backgroundColor = "black";
document.getElementsByClassName("box")[2].style.color = "white";
document.getElementsByClassName("box")[2].style.backgroundColor = "grey";
document.getElementById("id-box").style.color = "purple";
document.getElementById("id-box").style.backgroundColor = "yellow";
console.log(document.body.childNodes[1].lastChild.previousSibling)
document.body.childNodes[1].lastChild.previousSibling.style.color = "purple";
document.body.childNodes[1].lastChild.previousSibling.style.backgroundColor = "brown";
document.body.childNodes[1].firstChild.nextSibling.style.color = "white";
document.body.childNodes[1].firstChild.nextSibling.style.backgroundColor = "brown";

// document.designMode = "on" enables design mode for contenteditable div