/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  let max = Number.MIN_SAFE_INTEGER,
    mid = Number.MIN_SAFE_INTEGER,
    min = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      if (mid !== Number.MIN_SAFE_INTEGER) min = mid;
      if (max !== Number.MIN_SAFE_INTEGER) mid = max;
      max = nums[i];
    } else if (nums[i] > mid && nums[i] !== max) {
      if (mid !== Number.MIN_SAFE_INTEGER) min = mid;
      mid = nums[i];
    } else if (nums[i] > min && nums[i] !== mid && nums[i] !== max) {
      min = nums[i];
    }
  }
  return min === Number.MIN_SAFE_INTEGER ? max : min;
};
