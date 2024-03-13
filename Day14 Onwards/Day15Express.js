const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

/*
app.get('/about', (req, res) => {
  res.send('About Us')
})

app.get('/contact', (req, res) => {
    res.send('Contact Us')
})*/

// passing params
//  URL ="http://localhost:3000/contact/something?region=in&time=timezone"
app.get('/:slug/:second', (req, res) => {
    res.send(`${req.params.slug} and ${req.params.second}`)
    console.log(req.query); // will give { region: 'in', time: 'timezone' }
    console.log(req); // will give all the attributes of req
    console.log(req.params); // will give { slug: 'contact', second: 'something' }
    
})


// understanding static or public files in express js

//passing queries

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use(express.static('public')) // will give access of files to user from public folder we don't want our backend to be shown to the user therefore express hides our backend, i.e we can choose which files to show to the user using express js