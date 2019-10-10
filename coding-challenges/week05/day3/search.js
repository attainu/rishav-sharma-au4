$(document).ready(function() {
     // Write your app logic below this line
     
 
     //assignment start
     $.ajax({
         url:'./books.json',
         success:function(data) {
             console.log(data)
 
            var arr = Object.keys(data);
             for (var i=0;i < arr.length; i++) {
              