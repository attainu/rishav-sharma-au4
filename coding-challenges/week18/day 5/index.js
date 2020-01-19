var removeDuplicates = function(nums) {
    var hash = {};
var cur = 0;

for(var i = 0; i < nums.length; i++) {
    var num = nums[i];
    
    if (hash[num] === undefined) {
        hash[num] = true;
        nums[cur] = num;
        cur++;
    }
}

return cur;
};