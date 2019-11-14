const fs = require('fs');
const chalk = require('chalk');
const express = require('express'); // function
const app = express();
const session = require('express-session');
const PORT = 9090;

app.use(express.json());

app.use(session({
    name: 'ession',
    secret: 'fgfewygef3h34234fr.$%,.svdk,',
    resave: false,
    saveUninitialisation: true,
        cookie: {
            httpOnly: true,
            maxAge: 120000,
            path: '/',
            sameSite: true,
            secure: false
        }
}));

//import book model
var authRoutes = require('./routes/auth.js')

app.get('/login', authRoutes.login);
//Add routes here
app.post('/create', authRoutes.create);
app.get('/logout', authRoutes.logout);


// Start the app on pre defined port number
app.listen(PORT, function() {
	console.log("Application has started and running on port: ",chalk.blue(PORT));
}).on('error', function(error) {
	console.log("Unable to start app. Error >>>>", error);
});