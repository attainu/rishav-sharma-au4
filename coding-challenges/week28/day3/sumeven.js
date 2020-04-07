function sumEvenArguments(){
	var sum = 0;
	Array.prototype.slice.call(arguments)
	.forEach(function(val, idx) {
		if(val%2 === 0) {
			sum += val;
		}
	});
	return sum;
}
console.log(sumEvenArguments(1,2,3,4));