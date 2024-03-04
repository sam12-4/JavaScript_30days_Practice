
const intervalid = setInterval(() => {
        document.body.children[0].innerText += "."
        document.body.children[1].innerText += "."
        document.body.children[2].innerText += "."
        document.body.children[3].innerText += "."
        document.body.children[4].innerText += "."
        }, 1000)

setInterval(()=>{
    document.body.children[0].innerText= "Initalizing Hacking"
    document.body.children[1].innerText= "Reading your Files"
    document.body.children[2].innerText= "Password Files Detected"
    document.body.children[3].innerText= "Sending all passwords and personal files to server"
    document.body.children[4].innerText= "Cleaning Up"
    document.body.children[6].innerText= "Now Reaching your Home via Address Detected"
}, 4000)

// clearInterval(intervalid)
arr= [1,2,3,4]

const clearHidden=async()=>{
for (let i of arr) {
    await new Promise((resolve,reject)=>{
        setTimeout(() => {
            document.body.children[i].hidden = false;
            resolve();
        },(Math.random()*7000).toFixed(0));
    })
    
}}

clearHidden().then(()=>{
    clearInterval(intervalid);
    document.body.children[5].hidden = false   
    document.body.children[5].innerText += " Successfully Hacked ..."
}).then(()=>{
    document.body.children[6].hidden = false   
}).then(()=>{
    setInterval(() => {
        document.body.children[6].innerText += "."
    }, 1000);
})

