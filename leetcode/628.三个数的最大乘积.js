/*
 * @lc app=leetcode.cn id=628 lang=javascript
 *
 * [628] 三个数的最大乘积
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
  nums.sort((a, b) => a - b);
  const sum1 = nums.slice(0, 3).reduce((acc, cur) => acc * cur, 1);
  const sum2 = nums.slice(-3).reduce((acc, cur) => acc * cur, 1);
  const sum3 = nums[0] * nums[1] * nums.pop();
  return Math.max(sum1, sum2, sum3);
};
// maximumProduct([-1, -2, 1, 2, 3]);
