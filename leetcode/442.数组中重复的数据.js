/*
 * @lc app=leetcode.cn id=442 lang=javascript
 *
 * [442] 数组中重复的数据
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  const res = [];
  for (const n of nums) {
    const absn = n < 0 ? -n : n;
    if (nums[absn - 1] < 0) {
      res.push(absn)
    } else {
      nums[absn - 1] = -1 * nums[absn - 1]
    }
  }
  return res;
};
// @lc code=end

