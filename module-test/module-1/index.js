const chalk = require('chalk');
const express = require('express'); // function
const app = express();
const exphbs = require('express-handlebars');
const PORT = 9090;
const MongoClient = require('mongodb').MongoClient;
const csvtojson = require("csvtojson");
const Filesystem = require("fs");

csvtojson().fromFile("./data.csv").then(users => {
    console.log(data);

const json = csvtojson(source, {fields: ["username","name","age","city"] });
Filesystem.writeFileSync("./users.json", json);
});

 
app.use(express.json());
app.use('/static',express.static('public'));

// Configure Handlebars
const hbs = exphbs.create({
	extname: '.hbs'
});


// Register Handlebars as view engine
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');


// Connection URL
var url = 'mongodb://localhost:27017';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
    if(error) {
        throw error;
    }
    var db = client.db('eagle-rishav-sharma');
    var collection = db.collection('users');
    collection.find({}).toArray (function(error, response){
        console.error(error);

        console.log(response);

    });
});

app.get('/username', function(req,res){
    var data = books;
    
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