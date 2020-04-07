function invokeMax(fn, num){
	var count = 0;
	return function(){
		if(count >= num) {
			return 'Maxed Out!';
		}
		count++;
		return fn.apply(this, arguments);
	}
}
function add(a,b){
    return a+b
}

var addOnlyThreeTimes = invokeMax(add,3);

console.log(addOnlyThreeTimes(1,2))
console.log(addOnlyThreeTimes(2,2))
console.log(addOnlyThreeTimes(1,2))
console.log(addOnlyThreeTimes(1,2))