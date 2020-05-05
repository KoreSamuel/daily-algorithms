/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  if (nums.length <= 1) return nums;
  let left = [], right = [];
  let pivotIndex = Math.floor(nums.length / 2);
  let pivot = nums.splice(pivotIndex, 1)[0];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < pivot) {
      left.push(nums[i])
    } else {
      right.push(nums[i])
    }
  }
  return sortArray(left).concat([pivot], sortArray(right))
};
// @lc code=end

