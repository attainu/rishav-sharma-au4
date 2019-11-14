const fs = require('fs');
const chalk = require('chalk');
const express = require('express'); // function
const app = express();
const exphbs = require('express-handlebars');
const PORT = 9090;


//import the controller
var books = require('./data/books.json');


// Configure Handlebars
const hbs = exphbs.create({
	extname: '.hbs'
});

// Register Handlebars as view engine
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

app.get('/query?', function(req,res){
var data = books;

var result = data.filter((book) => {
	return book.language.toLowerCase() === req.query.language;
});

res.render('search',{
	data: result
});
});


// Start the app on pre defined port number
app.listen(PORT, function() {
	console.log("Application has started and running on port: ",chalk.blue(PORT));
}).on('error', function(error) {
	console.log("Unable to start app. Error >>>>", error);
});