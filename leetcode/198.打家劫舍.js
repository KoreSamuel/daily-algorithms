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
};
// @lc code=end

