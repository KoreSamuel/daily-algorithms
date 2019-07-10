/*
 * @lc app=leetcode.cn id=485 lang=javascript
 *
 * [485] 最大连续1的个数
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let max = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count += 1;
      if (count > max) {
        max = count;
      }
    } else {
      count = 0;
    }
  }
  return max;
};
