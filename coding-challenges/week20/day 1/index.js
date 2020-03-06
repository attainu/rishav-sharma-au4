//palindrome

var isPalindrome = function(x) {
    const s = String(x)
    for (let i = 0, j = s.length -1; i < j; i++, j--) {
      if (s[i] !== s[j]) {
        return false
      }
    }
    return true
  };
  console.log(isPalindrome('121'));