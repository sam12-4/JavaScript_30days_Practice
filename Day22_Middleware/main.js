// These are application level middlewaress
// Sequence of middleware is very importants

const express = require('express')
const app = express()
const fs= require("fs")
const blog = require("./routes/blog")



app.use('/blog' ,blog)

// middleware 1
app.use((req, res, next)=>{
    console.log('LOGGED')
    console.log(req.headers); 
    req.sameer = "Hi i am sameer"
    fs.appendFileSync("sameer1.txt","\nthis is sameer2")
    next()
})

// middleware 2
app.use((req, res, next)=>{
    req.sameer = "Hi i am sameer2"
    console.log(req.sameer);
    console.log(req.method);
    next()
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000)