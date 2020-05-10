/*
 * @lc app=leetcode.cn id=461 lang=javascript
 *
 * [461] 汉明距离
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let temp = x ^ y;
  let count = 0;
  while (temp !== 0) {
    temp = temp & (temp - 1);
    count++;
  }
  return count;
};
// @lc code=end

