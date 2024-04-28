const path = require('path')
const express = require('express')
var bodyParser = require('body-parser')
const app = express()


app.use(express.static(path.join(__dirname,'static')));
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json)

app.get('/static/:filename', function (req, res) {

    console.log("valeur parems", req.params)
    res.sendFile(path.join(__dirname, 'static', req.params.filename));
  })
  
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)

