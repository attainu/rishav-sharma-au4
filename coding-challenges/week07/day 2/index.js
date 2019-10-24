const express = require('express'); // function
const app = express();
const PORT = 9090;

//home route
app.get('/',function(req,res){
    res.send('WELCOME TO SEARCHINGPAGE');
});


app.get('/query?',function(req,res) {
    console.log(req.query);
    var letter = req.query.name;
    
    var names = ["Aahan","Aarav","Aayush","Abeer","Aditya","Agastya","Ahil","Angad","Ansh","Archit","Arjun","Arnav","Atharv","Ayaan",
"Darsh","Dev","Dhruv","Hridaan","Hriday","Ishaan","Jashn","Kabir","Kahaan","Kartik","Kiaan","Lakshya","Mahir","Manav","Neel","Palash",
"Param","Parth","Rajveer","Ranveer","Reyansh","Rudra","Samar","Sanay","Shaurya","Shiv","Shivaan","Siddharth","Varun","Ved","Veer",
"Viaan","Vihaan","Yash","Yuvaan"]
    
    var result = [];
    for(const name of names) {
        var element = name.charAt(0).toLowerCase().concat(name.charAt(1),name.charAt(2));
        if(element == letter) {
            result.push(name);
        }
    }
    console.log(result);
    res.send(result);
});

app.listen(PORT, function() {
	console.log("Application has started and running on port: ", PORT);
}).on('error', function(error) {
	console.log("Unable to start app. Error >>>>", error);
});
