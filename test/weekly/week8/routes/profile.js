const ProfileController = {};

ProfileController.uploadFiles = function(request, response) {
    console.log(request.flies);
    console.log(request.body);
    return response.json({
        status: true
    });
}
module.exports= ProfileController;
