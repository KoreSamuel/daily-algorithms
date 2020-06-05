/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let i = 0, j = height.length - 1;
  let maxLeft = 0, maxRight = 0;
  let res = 0;
  while (i <= j) {
    if (maxLeft < maxRight) {
      if (height[i] < maxLeft) {
        res += maxLeft - height[i]
      } else {
        maxLeft = height[i]
      }
      i++;
    } else {
      if (height[j] < maxRight) {
        res += maxRight - height[j];
      } else {
        maxRight = height[j];
      }
      j--;
    }
  }
  return res;
};
// @lc code=end

