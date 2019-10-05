var city = [];
$.ajax({
    url: "https://raw.githubusercontent.com/attainu/attainu-eagle/master/coding-challenges/week-4/day-4/cities.json",
    method: "GET",
    datatype: "json",
    success: function(data) {
        data = JSON.parse(data);
        for(var i = 0; i< data.length; i++){
            city.push(data[i]);
        }

    },
    error: function(error){
        console.log(error);
    }
    
});
console.log(city);

var searchField = document.querySelector("#search-keyword");
var searchForLetter;

$("#submit-btn").on('click', function() {
    searchForLetter = searchField.nodeValue;
    $("#response-container ul").html("");
    for (var i = 0; i < city.length; i++) {
        if(city[i].name.charAt(0).toLowerCase() == searchForLetter){
            $("#response-container ul").appendChild('<li class="list-group-item"> cities: ' +city[i].name+ '</li>');
        }
    }
});