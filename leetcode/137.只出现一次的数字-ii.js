/*
 * @lc app=leetcode.cn id=137 lang=javascript
 *
 * [137] 只出现一次的数字 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const hash = {};
  for (const num of nums) {
    if (hash[num]) {
      hash[num]++;
    } else {
      hash[num] = 1;
    }
  }
  for (const k of Object.keys(hash)) {
    if (hash[k] === 1) {
      return k;
    }
  }
};
// @lc code=end

