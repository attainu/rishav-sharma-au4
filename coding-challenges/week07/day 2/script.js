$(document).ready(function(){
    $('buttonClick').on('click',function(){
        $('.resultList').empty();
        var name = $('#namesearch').val()
        if(!name){
            return;
        }
        $.ajax({
            url : "/result",
            method : "post",
            data : {
                "string" :name

            },
            success : function(data){
                if(data.length==0){
                    $('<p/>').text("No Match Found").appendTo('.resultList');

                }
                console.log(data);
                data.forEach(function(value){
                    $('<p/>').text(value).appendTo('.resultList');
                });
            }
        });
    });
});