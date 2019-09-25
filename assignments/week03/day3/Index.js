//Write a Javascript program that prints multiplication table of 5 upto 10.
var numbers = [1,2,3,4,5,6,7,8,9,10];
total=numbers.reduce(function(accumalator,currentvalue){
 console.log(5+ "*" + currentvalue + "=" +(5*currentvalue)) 
 accumalator=5 * currentvalue;
  return accumalator;
},5);
console.log(total);
