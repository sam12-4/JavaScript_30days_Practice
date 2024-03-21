// making Routes
const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
  res.send('shop home page')
})

router.get('/about', (req, res) => {
  res.send('About shop')
})

router.get('/:slug', (req, res) => {
  res.send(`cannot find requested url ${req.params.slug}`)
})

module.exports = router