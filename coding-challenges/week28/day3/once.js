function once(fn, thisArg){
	var count = 0;
	return function() {
		if(count === 0) {
			count++;
			return fn.apply(thisArg, arguments);	
		}
	}
}
function add(a,b){
        return a+b
    }

    var addOnce = once(add, this);
    console.log(addOnce(2,2)) // 4
    console.log(addOnce(2,2)) // undefined
    console.log(addOnce(2,2)) // undefined

function doMath(a,b,c){
        return this.firstName + " adds " + (a+b+c)
    }
    var instructor = {firstName: "Elie"}
    var doMathOnce = once(doMath, instructor);
    console.log(doMathOnce(1,2,3)) // "Elie adds 6"
    console.log(doMathOnce(1,2,3)) // undefined