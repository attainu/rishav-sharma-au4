/* class Factorial {
    constructor () {
  
    }
          //implement your code here
       factorial(number){
        if(number === 0){
          return 1;
        }else{
        return this.factorial(number-1)*number
      }
    }
  }
  
  let factoria = new Factorial();
  factoria.factorial(Number(prompt("Please enter your number")))
  
  // mention your time and apace complexity here
  //time complexity=o(n)
  //space complexity=1
   for output check this link:https://repl.it/@rishavsharmavst/factorial */
   function factorial(number){
       if(number === 0){
           return 1;
       }else{
           return number*factorial(number-1)
       }
   }
   console.log(factorial(5));