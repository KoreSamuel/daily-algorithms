/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// var uniquePaths = function (m, n) {
//   const dp = new Array(m + 1).fill(new Array(n + 1));
//   dp[1][1] = 0;
//   for (let i = 1; i <= m; i++) {
//     for (let j = 1; j <= n; j++) {
//       if (i === 1 || j === 1) {
//         dp[i][j] = 1;
//       } else {
//         dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
//       }
//     }
//   }
//   return dp[m][n];
// };
var uniquePaths = function (m, n) {
  let N = m + n - 2;
  let K = n - 1;
  let sum = 1;
  let temp = 1;
  while (K) {
    sum *= N--;
    temp *= K--;
  }
  return sum / temp;
};
// @lc code=end

