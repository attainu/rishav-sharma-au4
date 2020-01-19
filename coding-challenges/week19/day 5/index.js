//leetcode:https://leetcode.com/problems/valid-anagram/

var isAnagram = function(s, t) {
    if (s === null || t === null || s.length !== t.length) {
    return false;
}

var hash = {};
var i; 
for(i = 0; i < s.length; i++) {
    var sval = s[i];
    var tval = t[i];
    
    if (hash[sval] === undefined) {
        hash[sval] = 0;
    }
    
    if (hash[tval] === undefined) {
        hash[tval] = 0;
    }
    hash[sval]++;
    hash[tval]--;
}

for(var j in hash) {
    if (hash[j] !== 0) {
        return false;
    }
}

return true;
};