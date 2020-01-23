function climbStairs(n) {
    if (n <= 1) { return 1 }
  
    const dp = [0, 1]
    let i = 1
    while (n--) {
      i = (i + 1) % 2
      dp[i] = dp[0] + dp[1]
    }
    return dp[i]
  };
n=2;
console.log(climbStairs(n));