//Palindrome

function NameIs(str) {
	var Is=1;
	var l=str.length;
	for(var i=0;i<l/2;i++) {
		if(str[i]!==str[l-1-i]){
			Is=0;
			break;
		}
	}
	if(Is===0)
		return "Not a palindrome";
	return "A palindrome";

}

console.log(NameIs("kanak"));