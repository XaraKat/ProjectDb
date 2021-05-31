const express = require('express')
const app = express()
const port = process.env.PORT || 8080
const db = require('./database')
const cors = require('cors')
var log4js = require("log4js");

app.use(cors())
app.use(express.json());


// app.listen('8080')
app.listen(port, () => console.log(`listening on port: ${port}`))

app.get('/',function(req,res){
    db.select().from('info').then(function(data){
        res.send(data)
    })
    
})


app.post('/', function(req, res) {
     
     db.insert(req.body).into('info').then(function(data){
      console.log(req.body)
      res.sendStatus(200)
    })
});

