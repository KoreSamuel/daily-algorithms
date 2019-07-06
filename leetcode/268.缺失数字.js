/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 缺失数字
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const sum = nums.reduce((acc, cur) => acc + cur, 0);
  return (nums.length * (nums.length + 1)) / 2 - sum;
};
