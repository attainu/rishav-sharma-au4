var uniquePaths = function(m, n) {
    const dp = new Array(m).fill(1)
    while (--n > 0) {
      for (let i = 1; i < m; i++) {
        dp[i] += dp[i-1]
      }
    }
    return dp[m-1] || 1
  };
  console.log(uniquePaths(7,3))
