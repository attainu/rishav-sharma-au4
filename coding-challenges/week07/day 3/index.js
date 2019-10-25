var express = require('express');
var bodyParser = require('bodyParser');

var app = express();
var port = 9090;

//body-parser middleware
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
//home route
app.get('/',function(req,res){
    res.send("Hello Welcome To Login Page");
});

// register route
app.post('/register',function(req,res){
    console.log(req.body);
    res.send(req.body);
});

app.listen(post,function(req,res){
    console.log('server started at port ${post}');
});