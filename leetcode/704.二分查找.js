/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    let m = ((l + r) / 2) | 0;
    if (nums[m] === target) {
      return m;
    } else if (nums[m] > target) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }
  return -1;
};
