/*
 * @lc app=leetcode.cn id=1431 lang=javascript
 *
 * [1431] 拥有最多糖果的孩子
 */

// @lc code=start
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let max = -1;
  const res = [];
  for (const n of candies) {
    if (n > max) max = n;
  }
  for (const n of candies) {
    res.push(n + extraCandies >= max)
  }
  return res;
};
// @lc code=end

