const express = require('express')
const app = express()
const port = process.env.PORT ||8080
const db = require('./database')
const cors = require('cors')
var log4js = require("log4js");

app.use(cors())
app.use(express.json());
log4js.configure({
    appenders: {
      DefaultLogs: { type: 'file', filename: 'savedLogs.log' },
      Keeper: { type: 'dateFile', filename: 'sLogs.log' ,pattern:'.yyyy-MM-dd-hh'},
      Errors: { type: 'file', filename: 'errors.log' },
      console: { type: 'console' }
    },
    categories: {
      app: { appenders: ['Errors'], level: 'error' },
      keep: { appenders: ['console','Keeper'], level: 'debug' },
      another: { appenders: ['console'], level: 'trace' },
      default: { appenders: ['console', 'DefaultLogs'], level: 'trace' }
    }
  });

const errLogger = log4js.getLogger('app')
const defLogger = log4js.getLogger('keep')
// app.listen('8080')
app.listen(port, () => console.debug(`listening on port: ${port}`))
// app.listen(port, () => errLogger.debug(`listening on port: ${port}`))


app.get('/',function(req,res){
    try{
        db.select().from('info').then(function(data){
            res.send(data)
        })
    }catch(e){
      console.error(e)
      console.error("Error sending data to db")
    }    
})

app.post('/', function(req, res) {   
  db.insert(req.body).into('test').then(function(data){
    console.info(req.body)
    res.sendStatus(200)
  })
});

