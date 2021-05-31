const express = require('express')
const router = express.Router()

const db = require('../../database');

/* GET users listing. */
router.get('/index', function(req, res) {
  // res.send('hello mengumin');
  db.select('name').from('data').then(function(data){
    res.send(data)
    
  })
});

  // res.send('hello mengumin

module.exports = router

// app.listen('8080')