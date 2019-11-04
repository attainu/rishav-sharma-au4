//upto 3 pictures can be upload.
//upto 3 pdffiles can be upload.

const fs = require('fs');
const chalk = require('chalk');
const express = require('express'); // function
const app = express();
const PORT = 9090;
const multer  = require('multer')

const fileStorage = multer.diskStorage({
	destination : function(req, file,cb){
	var uploadPath = 'public/uploads/';
		return cb(null, uploadPath);
	},
	filename: function(req,file,cb) {
		console.log(file);
		var filename = file.originalname;
		return cb(null,filename)

	}
});

const upload = multer({ 
	storage: fileStorage 
});

//import the controller
var profileController = require('./routes/profile');

app.use(express.json());
app.use('/static', express.static('public'));


var fields = [
	{name: 'pictures', maxCount:3},
	{name: 'pdfFiles', maxCount:2}
];
app.post('/profile/upload-files',upload.fields(fields),profileController.uploadFiles);

// Start the app on pre defined port number
app.listen(PORT, function() {
	console.log("Application has started and running on port: ",chalk.blue(PORT));
}).on('error', function(error) {
	console.log("Unable to start app. Error >>>>", error);
});