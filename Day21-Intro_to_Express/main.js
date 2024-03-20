const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
  console.log(req);
})

app.get('/about', (req, res) => {
  res.send('Hello i am about page')
  console.log(req.params); // it will be empty object since it has no slug
})

app.get('/contact', (req, res) => {
  res.send('Hello I am About Contact Page')
})

app.get('/blog/:slug', (req, res) => {
  res.send(`Hello I am About Blog Page and i am a parameter ${req.params.slug} i am a query ${req.query.query} `)
  console.log(req.params);
  console.log(req.query);  //{ query: 'query1', q: 'query-query2' }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})