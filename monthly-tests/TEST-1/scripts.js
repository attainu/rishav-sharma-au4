var data = [];

   $.ajax({
     url : "./data.json",
     method : "GET",
     datatype : "JSON",
     success: function(data) {
       console.log(data);
      //data = JSON.parse(data);
      for(var i = 0; i < data.length; i++) {
          data.push(data[i]);
          }
        }
   });
   console.log(data);

   /*$("#submit-btn").on('click', function() {    

           $("tbody").html("");

           for(var i = 0; i < books.length; i++) {

               if(books[i].language.toLowerCase() == $("#search-keyword").val().toLowerCase()){
                   $("tbody").append('<tr><td>' + books[i].title + '</td><td>' + books[i].author + '</td><td>' + books[i].country + 
                   '</td><td>' + books[i].language + '</td><td>' + books[i].link + '</td><td>' + books[i].pages + '</td><td>' +
                    books[i].year + '</td><td>');

            }
       }
   });*/