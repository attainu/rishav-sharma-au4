const dataController = {};
const Model = require('./../models/data.json')

dataController.search = function(request,response) {
    var booklang = request.query;
    bookData= [];
    Model.forEach(function(Model){
        
    
    if(booklang.search == Model.language){
        bookData.push(Model)
    }
});
return response.render('search',{
    Model: bookData
});
}
module.exports = dataController;