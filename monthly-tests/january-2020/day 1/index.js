/* class MoveZeros {

    constructor() {
    }
  
    //implement your code here//// guaranteed to has O(N) complexity
  moveZeros(a) {
     if (a.length <= 1) { return a; }
      
      let zi = a.indexOf(0); // O(N)
      if (zi === -1 || zi === a.length - 1) { return a; }
      
      for(let i = zi + 1; i < a.length; i++) {
          if (a[i] !== 0) {
              a[zi++] = a[i];
              a[i] = 0;
          }
      }
      return a
   } 
   }// O(N)
    
  
  
  let movezeros = new MoveZeros();
  let array = [];
  let length = Number(prompt("Please enter the length of array"));
  for(let i = 1; i <= length; i++) {
     let input =  Number(prompt("Please enter your number"));
     array.push(input);
  }
  
  console.log(movezeros.moveZeros(array));
  
 // for output check this link:(https://repl.it/@rishavsharmavst/movezeros) */

 // guaranteed to has O(N) complexity
function moveZerosToEndFast(a) {
    if (a.length <= 1) { return a; }
    
    let zi = a.indexOf(0); // O(N)
    if (zi === -1 || zi === a.length - 1) { return a; }
    
    for(let i = zi + 1; i < a.length; i++) {
        if (a[i] !== 0) {
            a[zi++] = a[i];
            a[i] = 0;
        }
    } // O(N)
    
    return a;
}
console.log(moveZerosToEndFast([1,0,0,1]));