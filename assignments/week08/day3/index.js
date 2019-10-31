const express = require('express')
const app = express()

var port = 9090;

app.get('/', function (req, res) {
  res.send('Welcome to the calculator!')
})
app.use(express.json());

app.post('/add', function (req, res) {
  var num1 = req.body.num1
  var num2 = req.body.num2
  var result = Number(num1) + Number(num2)
  res.json({
    "num1": num1,
    "num2": num2,
    "result": result
  })
});

app.post('/sub', function (req, res) {
  var num1 = req.body.num1
  var num2 = req.body.num2
  var result = num1 - num2
  res.json({
    "num1": num1,
    "num2": num2,
    "result": result
  })
})
app.post('/mul', function (req, res) {
  var num1 = req.body.num1
  var num2 = req.body.num2
  var result = num1 * num2
  res.json({
    "num1": num1,
    "num2": num2,
    "result": result
  })
})
app.post('/div', function (req, res) {
  var num1 = req.body.num1
  var num2 = req.body.num2
  var result = num1 / num2
  res.json({
    "num1": num1,
    "num2": num2,
    "result": result
  })
})

app.listen(port, function () {
  console.log('hey good news port has started.....',port);
}).on('error', function(error) {
	console.log("Unable to start app Error >>>>", error);
});