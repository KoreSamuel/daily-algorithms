/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  const len = nums.length;
  let l0 = len;
  for (let i = 0; i < l0; ) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
      l0 -= 1;
    } else {
      i += 1;
    }
  }
};
