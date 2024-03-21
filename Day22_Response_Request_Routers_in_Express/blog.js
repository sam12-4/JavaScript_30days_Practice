// making Routes
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('blog home page')
})

router.get('/about', (req, res) => {
  res.send('About blog')
})

router.get('/:slug', (req, res) => {
  res.send(`About blog ${req.params.slug}`)
})

module.exports = router