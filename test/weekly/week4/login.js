var globalArray=[];
$(document).ready(function(){
    $('#form-Submit').on('click',function(){
        var nameValue = $('#UserName').val();
        var ageValue = $('#Age').val();
        globalArray.push(nameValue);
        for(var i=0;i<globalArray.length;i++){
            var a=globalArray[i];
        if(nameValue==a){
            $('#value').html('Name already exist!');
        } 
           }
        if(!nameValue){
            $('#value').html('Please input name');
            return false;
        }
       if(ageValue<15){
            $('#value').html('Age should be more than 15');
            return false;

        }else{
            $('<li/>').html(nameValue + ' '+ageValue).appendTo('#value');
            return true;
        } 
    });
});
console.log(globalArray);