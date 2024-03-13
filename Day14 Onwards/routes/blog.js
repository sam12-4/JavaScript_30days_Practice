const express = require('express')
const app = express()
const router = express.Router()

// creating a router-level middleware
router.use((req, res, next) => {
    // res.send("This is middleware1")
    req.sameer  = "hi! I am Sameer of middleware 1"
    console.log('This is router middleware')
    next()
})

router.use((req, res, next) => {
    // res.send("This is middleware1")
    req.sameer  = "hi! I am Sameer of middleware 2"
    console.log('This is router middleware 2')
    next()
})

// define the home page route
router.get('/', (req, res) => {
  res.send('Blog home page')
  console.log(req.sameer); // i.e middleware 2 of req.sameer overwrites middleware 1 of req.sameer
})
// define the about route
router.get('/about', (req, res) => {
  res.send('Blog about page')
})

module.exports = router