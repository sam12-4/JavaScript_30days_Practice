const express = require('express')
const app = express()
const port = 3000

// express router for blog
const blog = require('./routes/blog')
app.use('/blog', blog)

//  express router for Shop
const shop = require('./routes/shop')
app.use('/shop', shop)

// app.get('/', (req, res) => {
//   res.send('Hello World!')
//   console.log('get request');

// })

app.use(express.static("public"))

// app.post("/", (req, res)=>{
//     res.send('Hello post request')
//     console.log('Hello post request');

// })


// chaining in express

app.get('/', (req, res) => {
    res.send('Hello World!')
    console.log('get request');
}).post("/", (req, res) => {
    res.send('Hello post request')
    console.log('Hello post request');
}).put("/", (req, res) => {
    res.send('Hello put request')
    console.log('Hello put request');
})

app.get('/index', (req, res) => {
    res.sendFile("templates/index.html", { root:__dirname })
    console.log('index');
})

app.get('/api', (req, res) => {
    res.json({ root:__dirname, "a": "1", "b" : "2", "c" : "3", "d" :"4" })
    console.log('index');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
