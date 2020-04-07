function bind(fn, thisArg){
    var outerArgs = Array.prototype.slice.call(arguments).slice(2);
    return function() {
      var innerArgs = Array.prototype.slice.call(arguments);
      var args = outerArgs.concat(innerArgs);
      return fn.apply(thisArg, args);
    }
  }
  function firstNameFavoriteColor(favoriteColor){
          return this.firstName + "'s favorite color is " + favoriteColor
      }
      
      var person = {
          firstName: 'Elie'
      }
      
      var bindFn = bind(firstNameFavoriteColor, person);
      bindFn('green') // "Elie's favorite color is green"
      
      var bindFn2 = bind(firstNameFavoriteColor, person, 'blue');
      bindFn2('green') // "Elie's favorite color is blue" 
      
      function addFourNumbers(a,b,c,d){
          return a+b+c+d;
      }
  
      console.log(bind(addFourNumbers,this,1)(2,3,4)) // 10
      console.log(bind(addFourNumbers,this,1,2)(3,4)) // 10
      console.log(bind(addFourNumbers,this,1,2,3)(4)) // 10
      console.log(bind(addFourNumbers,this,1,2,3,4)()) // 10
      console.log(bind(addFourNumbers,this)(1,2,3,4)) // 10
      console.log(bind(addFourNumbers,this)(1,2,3,4,5,6,7,8,9,10)) // 10