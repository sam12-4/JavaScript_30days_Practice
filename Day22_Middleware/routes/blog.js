const express = require('express')
const router = express.Router()

// middleware that is specific to this router
// app.use((req, res, next) => {
//     console.log('Time: ', Date.now())
//     next()
//   })
router.use((req, res, next)=>{
    console.log('middlewaress of router')
    next()
})



// define the home page route
router.get('/', (req, res) => {
  res.send('blog home page')
})
// define the about route
router.get('/about', (req, res) => {
  res.send('About blogs')
})

module.exports = router