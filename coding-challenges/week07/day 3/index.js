var express = require('express');
var bodyParser = require('bodyParser');

var app = express();
var port = 9090;

//body-parser middleware
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

//register middleware
app.use('/register',function(req,res,next){
    if(Object.keys(req.body).length === 0) {
        res.status(404);
        res.send("No name and password  --> bad request");
    }
    if(req.body.password !== req.body.confirmpassword){
        res.status(400).send("password not matching, Error status 400 -->Bad resquest");
    }
    next();
});


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