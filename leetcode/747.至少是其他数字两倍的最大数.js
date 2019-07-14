/*
 * @lc app=leetcode.cn id=747 lang=javascript
 *
 * [747] 至少是其他数字两倍的最大数
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
  let max = -1,
    subMax = -1;
  let idx = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      if (nums[i] > subMax) {
        subMax = max;
      }
      max = nums[i];
      idx = i;
    } else if (nums[i] > subMax) {
      subMax = nums[i];
    }
  }

  return subMax * 2 <= max ? idx : -1;
};
