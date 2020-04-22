/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const len = nums.length;
  const tags = new Array(len);
  const res = [];
  for (let i = 0; i < len; i++) {
    tags[nums[i] - 1] = true;
  }
  for (i = 1; i <= len; i++) {
    if (!tags[i - 1]) {
      res.push(i)
    }
  }
  return res;
};
// @lc code=end

