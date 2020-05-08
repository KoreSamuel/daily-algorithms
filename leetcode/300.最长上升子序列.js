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
  const len = nums.length;
  const dp = [];
  for (let i = 1; i < len; i++) {
    dp[i] = [];
    let curr = nums[i];
    let max = Number.MIN_SAFE_INTEGER;
    for (let j = 0; j < i; j++) {
      if (nums[j] > max) {
        max = nums[j];
        dp[i]++;
      } else {
        dp[i] = 0;
        max = Number.MIN_SAFE_INTEGER;
      }
    }
    console.log(dp[i])
  }
};
lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]);
// @lc code=end

