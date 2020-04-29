/*
 * @lc app=leetcode.cn id=260 lang=javascript
 *
 * [260] 只出现一次的数字 III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  const hash = {};
  const res = []
  for (const num of nums) {
    hash[num] = !hash[num];
  }
  for (const [k, v] of Object.entries(hash)) {
    if (v) res.push(k)
  }
  return res;
};
// @lc code=end

