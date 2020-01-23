var sortColors=function(nums) {
    const len = nums.length
    let zeroEnd = 0
    let twoStart = len - 1
    let i = 0
    while (i <= twoStart) {
      if (nums[i] === 0 && i !== zeroEnd) {
        const t = nums[i]
        nums[i] = nums[zeroEnd]
        nums[zeroEnd] = t
        zeroEnd++
      } else if (nums[i] === 2 && i !== twoStart) {
        const t = nums[i]
        nums[i] = nums[twoStart]
        nums[twoStart] = t
        twoStart--
      } else {
        i++
      }
    }
  };
  arr=[2,0,2,1,1,0]
  sortColors(arr)
  console.log(arr)