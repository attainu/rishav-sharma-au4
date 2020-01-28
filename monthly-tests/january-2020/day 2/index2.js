/* class MaximumSubarray {
    constructor() {
    }
    //implement your code here
    maximumSubarray(nums){
          var sum = 0;
    var maxSum = -Infinity;
    
    for(var i = 0; i < nums.length; i++){
        sum += nums[i];
        maxSum = Math.max(maxSum, sum);
        
        if(sum < 0){
            sum = 0;
        }
    }
    
    return maxSum;
    }
}

let maximumsubarray = new MaximumSubarray();
let array = []
let length = Number(prompt("Please enter length of array"))
for(let i = 1; i <= length; i++) {
    let input =  Number(prompt("Please enter your number"))
    array.push(input);
}
console.log(array)
maximumsubarray.maximumSubarray(array)

// mention your time and space complexity here
//time complexsity =o(n),space complexity=n; */

//For output check this link out:https://repl.it/@rishavsharmavst/contiguous-subarray

var maxSubArray = function(nums) {
    var sum = 0;
    var maxSum = -Infinity;
    
    for(var i = 0; i < nums.length; i++){
        sum += nums[i];
        maxSum = Math.max(maxSum, sum);
        
        if(sum < 0){
            sum = 0;
        }
    }
    
    return maxSum;
};
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));



