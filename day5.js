function climb(n) {
  if (n <= 2) {
    return n;
  }

  let dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}
// f(n) = f(n-1) + f(n-2)
// O(n)
// Fibonacci Sequence but without DP recursion will throw timeout
