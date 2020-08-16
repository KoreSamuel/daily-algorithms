/*
 * @lc app=leetcode.cn id=1299 lang=javascript
 *
 * [1299] 将每个元素替换为右侧最大元素
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  const len = arr.length;
  let max = arr[len - 1];
  const result = [-1];
  for (let i = len - 2; i >= 0; i--) {
    result.unshift(max);
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return result;
};
// @lc code=end
