var nameList = ["Aahan","Aarav","Aayush","Abeer","Aditya","Agastya","Ahil","Angad","Ansh","Archit","Arjun","Arnav","Atharv","Ayaan",
"Darsh","Dev","Dhruv","Hridaan","Hriday","Ishaan","Jashn","Kabir","Kahaan","Kartik","Kiaan","Lakshya","Mahir","Manav","Neel","Palash",
"Param","Parth","Rajveer","Ranveer","Reyansh","Rudra","Samar","Sanay","Shaurya","Shiv","Shivaan","Siddharth","Varun","Ved","Veer",
"Viaan","Vihaan","Yash","Yuvaan"]


const fs = require('fs');
const chalk = require('chalk');
const express = require('express'); // function
const app = express();
const PORT = 9090;

app.use(express.json());
app.use(express.urlencoded());
app.use('/static', express.static('public'));
app.use('/',function(req,res){
    res.sendFile(__dirname+'/index.html')
})
app.post('/result',function(req,res){
    var output = req.body;
    var resultList = [];
    var outputLength = output.string.length;
    nameList.forEach(function(data,index){
        var result = data.substring(0, outputLength);
        if(output.string.toLowerCase()===result.toLowerCase()){
            resultList.push(data);

        }
    })
    res.send(resultList);
});

app.listen(PORT, function() {
	console.log("Application has started and running on port: ", PORT);
}).on('error', function(error) {
	console.log("Unable to start app. Error >>>>", error);
});
