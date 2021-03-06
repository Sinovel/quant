var express = require('express')
var router = express.Router()

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
})

router.get('/login', function(req, res, next) {
  if (req.session.UserId) {
    res.render('index')
  } else {
    res.render('login')
  }
})

module.exports = router
