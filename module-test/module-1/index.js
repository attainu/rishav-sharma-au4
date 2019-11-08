const chalk = require('chalk');
const express = require('express'); // function
const app = express();
const exphbs = require('express-handlebars');
const PORT = 9090;
const MongoClient = require('mongodb').MongoClient;
const csvtojson = require("csvtojson");
const Filesystem = require("fs");


app.use(express.json());
app.use(express.urlencoded());
app.use('/static',express.static('public'));

csvtojson().fromFile("./data.csv").then(users => {
    console.log(data);

const json = csvtojson(source, {fields: ["username","name","age","city"] });
Filesystem.writeFileSync("./users.json", json);
});

 


// Configure Handlebars
const hbs = exphbs.create({
	extname: '.hbs'
});


// Register Handlebars as view engine
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');


// Connection URL
var url = 'mongodb://localhost:27017';
csvtojson().fromFile("./data.csv").then(data => {
    console.log(data);

// Use connect method to connect to the server
MongoClient.connect(url,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (err, client) => {
        if (err) throw err;
     client.db('eagle-rishav-sharma').collection("users")
    .insert(data, (err, res) => {
        if (err) throw err;
        console.log(`Inserted: ${res.insertedcount} rows`);
        client.close();

    });
  });
});
var db =null;
MongoClient.connect(url, function(error, client){
    if(error){
        throw error;
    }
    db = client.db('eagle-rishav-sharma');
});

app.post('/users', function(req,res){
    var data = req.body;
    var collection = db.collection('users');
    collection.insertone(data, function(error, response){
        if(error){
            return res.send({
                status: false,
                message: "failed to update"
            });
          }
          return res.send({
              status: true,
              message: "successfully created user",
            });
    });
});
app.get('/users', function(req,res){
    var collection = db.collection('users');
    collection.find({}).toArray(function(error, response){
        if(error){
            return res.send({
                status: false,
                message: "failed"
            });
          }
          return res.send({
              status: true,
              message: "successfully retrive",
              data:response
          });
        });
    });

app.put('/users', function(req,res){
      var updateData = req.body.updateData;
      var identifier = req.body.identifier;

    var collection = db.collection('users');

    collection.update({
        name: identifier
    },{
        $set: updateData
      }, function(error, response){
      console.log(error, response);
      if(error){
          return res.send({
              status: false,
              message: "failed to update"
          });
        }
        return res.send({
            status: true,
            message: "successfully updated",
            
        });
  });
});
app.get('/',function(req,res){
    db.collection('users').find().toArray((err, result) => {
        if (err) return console.log(err)
        res.render('homepage.hbs', {
          layout: false,
          users: result 
    
        });
    });   
  });
    
    
    // Start the app on pre defined port number
    app.listen(PORT, function() {
        console.log("Application has started and running on port: ",chalk.blue(PORT));
    }).on('error', function(error) {
        console.log("Unable to start app. Error >>>>", error);
    });