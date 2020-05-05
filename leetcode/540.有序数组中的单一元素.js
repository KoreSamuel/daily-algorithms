/*
 * @lc app=leetcode.cn id=540 lang=javascript
 *
 * [540] 有序数组中的单一元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  let res = 0;
  for (const n of nums) {
    res = (res ^ n)
  }
  return res;
};
// @lc code=end

