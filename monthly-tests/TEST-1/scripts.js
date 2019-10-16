/*$(document).ready(function(){

  $.getJSON("employee_data.json",fuction(data){
    var employee_data ='';
    $.each(data,function(key, value){
      employee_data += '<tr>';
      employee_data += '<td>' + value.name+ '</td>';
      employee_data += '<td>' + value.E-MAIL+ '</td>';
      employee_data += '<td>' + value.name+ '</td>';
      employee_data += '<td>' + value.name+ '</td>';
    })


  });
});*/







var employee_data = [];

   $.ajax({
     url : "./employee_data.json",
     method : "GET",
     datatype : "JSON",
     success: function(employee_data) {
       //console.log(data);
      //data = JSON.parse(data);
      for(var i = 0; i < employee_data.length; i++) {
        data.push(employee_data[i]);
          }
        }
   });
   console.log(employee_data);

   //$("#submit-btn").on('click', function() {    

           $("tbody").html("");

           for(var i = 0; i < employee_data.length; i++) {

               
                   $("tbody").append('<tr><td>' + employee_data[i].ID + '</td><td>' + employee_data[i].NAME + '</td><td>' + employee_data[i].E-MAIL + 
                   '</td><td>' + employee_data[i].COUNTRY + '</td><td>' + employee_data[i].SALARY+ '</td><td>' + employee_data[i].ACTION + '</td><td>');

            }
       //}
   //});*/