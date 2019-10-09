var image = document.querySelector("#dog-image");

function getRandomImage() {
    $.ajax({
        url: "https://dog.ceo/api/breeds/image/random",
        method: "GET",
        datatype: "json",
        success: function(data) {
            console.log(data);
            image.setAttribute('src',data.message);
        }
    });
}
$(document).ready(function(){
    getRandomImage();
});
$("#random").on('click',function() {
    getRandomImage();
});