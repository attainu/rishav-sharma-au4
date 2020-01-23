function checker(nums, target) {
    let index = 0;

    while (index < nums.length) {
      if (nums[index] === target || nums[index] > target) {
        return index;
      } else {
        index++;
      }
    }

    return index;
};
nums=[1,3,5,6];
target= 5;
 console.log(checker(nums,target));