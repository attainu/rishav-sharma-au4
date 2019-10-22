 const express = require("express");
 const chalk = require("chalk");
 const app = express();
 const port = 8080;
 app.get("/homepage",function(req,res){
res.status(200).send("Hello World!");
 });
 app.get("/contact-us",function(req,res){
    res.status(200).send("Hello!!");
     });
     app.listen(port,function(){
         console.log("port starting...",chalk.yellow(port));
     });
