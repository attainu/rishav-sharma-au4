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

app.post('/login', function(req, res) {
	console.log("POST DATA >>>>", req.body);
});

app.get('/login', function(req, res) {
	res.sendFile(__dirname + '/login.html');
});
app.post('/register', function(req, res) {
	console.log("POST DATA >>>>", req.body);
});

app.get('/register', function(req, res) {
	res.sendFile(__dirname + '/register.html');
});

app.listen(PORT, function() {
	console.log("Application has started and running on port: ", PORT);
}).on('error', function(error) {
	console.log("Unable to start app. Error >>>>", error);
});