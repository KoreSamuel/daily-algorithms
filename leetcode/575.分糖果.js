/*
 * @lc app=leetcode.cn id=575 lang=javascript
 *
 * [575] 分糖果
 */

// @lc code=start
/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function (candies) {
  const candiesType = new Set(candies).size; // 糖果总种类
  return Math.min(candiesType, (candies.length / 2 | 0));
};
// @lc code=end

