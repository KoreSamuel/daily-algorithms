/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长上升子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  if (!nums.length) return 0;
  const len = nums.length;
  const dp = [];
  dp[0] = 1;
  let maxLen = 1;
  for (let i = 1; i < len; i++) {
    let maxv = 0;
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        maxv = maxv > dp[j] ? maxv : dp[j];
      }
    }
    dp[i] = maxv + 1;
    maxLen = maxLen > dp[i] ? maxLen : dp[i]
  }
  return maxLen;
};
lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]);
// @lc code=end

