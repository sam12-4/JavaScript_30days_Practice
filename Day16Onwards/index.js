const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/file', (req, res) => {
  let siteName  = "adidas";  
  let siteContent = "This is a good brand";
  let searchText = "Search Now";
  let arr = [56, 1, 45, 67];
  res.render('index', {siteName : siteName, siteContent : siteContent, searchText : searchText, arr})
})


// app.get('/file/:slug', (req, res) => {
//   res.sendFile('templates/fileinner.html', {root : __dirname})
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})