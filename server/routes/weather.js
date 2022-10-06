const express = require('express')
const request = require('superagent')

const router = express.Router()

router.get('/:city', (req, res) => {
  console.log('hitting route')
  request
    .get('https://goweather.herokuapp.com/weather/' + req.params.city)
    .set('Accept', 'application/json')
    .then((response) => {
      res.json(response.body)
      return null
    })
    .catch((err) => {
      console.error(err.message)
    })
})

module.exports = router
