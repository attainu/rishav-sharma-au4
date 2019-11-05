const AuthController = {};
var model = require('../models/Auth')

AuthController.login = function(request, response){
    request.session.loggedIn = true;
        response.json({
            "status": true,
            "message": "loggedIn in the system"
        });
    }
    AuthController.create = function(request, response){
    var username = request.body.username;
    var password = request.body.password;
    if(request.session.loggedIn) {
        model.create(username,password);
        response.json({
         status: true,
        message: "successfully you logged in to create book"
    });
} else {
    response.json({
        "status": false,
        "message": "please login to create book"
    });
}
    }
AuthController.logout = function(request, response) {
    if (request.session.loggedin){
        request.session.destroy(function(err){
            if(err) {
                next(err)
            } else {
                response.clearCookie('reconnecting.com')
                response.json({
                    "status": true,
                    "message": "Loggedout  very smartly"
                });
            }
        });
    }

}
module.exports = AuthController;