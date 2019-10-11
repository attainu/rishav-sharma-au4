var books = [];

   $.ajax({

   url : "./books.json",
   method : "GET",
   datatype : "json",
   success: function(data) {
       console.log(data);
      data = JSON.parse(data);
      for(var i = 0; i < data.length; i++){
          books.push(data[i]);
          }
   }
   });
   console.log(books);

   $("process-submit").on('click',function(){    

           $("tbody").html("");

           for(var i = 0; i < books.length; i++){

               if(books[i].language.toLowerCase() == $("#search-keyword").val().toLowerCase()){
                   $("tbody").append('<tr><td>' + book[i].title + '</td><td>' + book[i].author + '</td><td>' + book[i].country + 
                   '</td><td>' + book[i].language + '</td><td>' + book[i].link + '</td><td>' + book[i].page+ '</td><td>' +
                    book[i].page + '</td><td>');

               }
       }
   });