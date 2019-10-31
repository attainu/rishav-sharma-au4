const express = require('express')
const app = express()

var port = 9090;

app.get('/', function (req, res) {
  res.send('Welcome to the calculator!')
})

app.get('/add', function (req, res) {
  var num1 = parseInt(req.params.num1)
  var num2 = parseInt(req.params.num2)
  var Add = (num1 + num2).toString()
  res.send(Add)
})

app.get('/subtract', function (req, res) {
  var num1 = parseInt(req.params.num1)
  var num2 = parseInt(req.params.num2)
  var subtraction = (num1 - num2).toString()
  res.send(subtraction)
})

app.get('/multiply', function (req, res) {
  var num1 = parseInt(req.params.num1)
  var num2 = parseInt(req.params.num2)
  var multiply = (num1 * num2).toString()
  res.send(multiply)
})

app.get('/divide', function (req, res) {
  var num1 = parseInt(req.params.num1)
  var num2 = parseInt(req.params.num2)
  var divide = (num1 / num2).toString()
  res.send(divide)
})

app.listen(port, function () {
  console.log('hey good news port has started.....',port);
}).on('error', function(error) {
	console.log("Unable to start app Error >>>>", error);
});