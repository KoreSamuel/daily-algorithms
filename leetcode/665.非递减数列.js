/*
 * @lc app=leetcode.cn id=665 lang=javascript
 *
 * [665] 非递减数列
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
  let count = 0;

  for (let i = 0; i < nums.length - 1 && count <= 1; i++) {
    if (nums[i + 1] < nums[i]) {
      count++;
      if (i < 1 || nums[i - 1] <= nums[i + 1]) {
        nums[i] = nums[i + 1];
      } else {
        nums[i + 1] = nums[i];
      }
    }
  }
  return count <= 1;
};
// checkPossibility([4, 2, 1]);
