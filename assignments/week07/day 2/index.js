const fs = require('fs');
const chalk = require('chalk');
const express = require('express'); // function
const app = express();
const PORT = 9090;

app.use(express.json());
app.use(express.urlencoded());
app.use('/static', express.static('public'));

app.get('/', function(req, res) {
	res.status(200).send("Hello World! This is the homepage.");
});

app.get('/hello', function(req, res) {
	console.log("Query parameters >>>", req.query);

	var name = req.query.name;

	res.send(name);
});

app.post('/sign-up', function(req, res) {
	console.log("POST DATA >>>>", req.body);
});

app.get('/sign-up', function(req, res) {
	res.sendFile(__dirname + '/sign-up.html');
});

app.get('/calculate-square', function(req, res) {
	res.sendFile(__dirname + '/square.html');
});

app.post('/calculate-square', function(req, res) {
	var number1 = req.body['number-1'];

	var result = number1 * number1;

	res.json({
		square: result
	});
});
	app.get('/calculate-Add', function(req, res) {
		res.sendFile(__dirname + '/Add.html');
	});
	
	app.post('/calculate-Add', function(req, res) {
		var number1 = req.body['number-1'];
		var number2 = req.body['number-2'];
		var result = number1+number2;
	
		res.json({
			Add: result
		});
	});
		app.get('/calculate-Subtract', function(req, res) {
			res.sendFile(__dirname + '/Subtract.html');
		});
		
		app.post('/calculate-Subtract', function(req, res) {
			var number1 = req.body['number-1'];
			var number2 = req.body['number-2'];			
			var result = number1 - number2;
		
			res.json({
				Subtract: result
			});
		});
			app.get('/calculate-Multiply', function(req, res) {
				res.sendFile(__dirname + '/Multiply.html');
			});
			
			app.post('/calculate-Multiply', function(req, res) {
				var number1 = req.body['number-1'];
				var number2 = req.body['number-2'];
				var result = number1 * number2;
			
				res.json({
					Multiply: result
				});
});
app.get('/calculate-Divide', function(req, res) {
	res.sendFile(__dirname + '/Divide.html');
});

app.post('/calculate-Divide', function(req, res) {
	var number1 = req.body['number-1'];
	var number2 = req.body['number-2'];
	var result = number1 / number2;

	res.json({
		Divide: result
	});
});

app.listen(PORT, function() {
	console.log("Application has started and running on port: ", PORT);
}).on('error', function(error) {
	console.log("Unable to start app. Error >>>>", error);
});