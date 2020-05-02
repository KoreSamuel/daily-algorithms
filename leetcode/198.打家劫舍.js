/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  /*
  let evenSum = 0;
  let oddSum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 1) {
      oddSum += nums[i];
      oddSum = Math.max(oddSum, evenSum)
    } else {
      evenSum += nums[i];
      evenSum = Math.max(oddSum, evenSum);
    }
  }
  return Math.max(oddSum, evenSum)
  */

  // dp
  if (!nums.length) return 0;
  let dp = [];
  dp[0] = 0;
  dp[1] = nums[0];
  for (let i = 2; i <= nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1]);
  }
  return dp[nums.length - 1];
};
// @lc code=end

