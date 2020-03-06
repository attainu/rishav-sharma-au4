//The program  run in O(n) space complexity and O(nodes) time complexity.
var threeSum = function(nums) {
    var result = [];
    
    if(nums.length < 3){
        return result;
    }
    
    nums.sort(function(a,b){return a>b ? 1 : -1;});
    
    var len = nums.length;
    
    for(var i = 0; i < len-2; i++){
        
        if(i === 0 || nums[i] > nums[i-1]){
            target = 0 - nums[i];
            
            j = i + 1;
            k = len - 1;
            
            while(j < k){
                if(nums[j] + nums[k] === target){
                    result.push([nums[i],nums[j],nums[k]]);
                    j++;
                    k--;
                    while(j < k && nums[j] === nums[j-1]){j++;}
                    while(j < k && nums[k] === nums[k+1]){k--;}
                } else if(nums[j] + nums[k] < target){
                    j++;
                } else {
                    k--;
                }
            }
        }
    }
    
    return result;
};
console.log(threeSum([-1,0,1,2,-1,-4]));


//The program run in O(1) space complexity and O(nodes) time complexity.