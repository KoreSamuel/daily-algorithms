/*
 * @lc app=leetcode.cn id=771 lang=javascript
 *
 * [771] 宝石与石头
 */

// @lc code=start
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
  return [...J].reduce((acc, cur) => {
    for (const c of S) {
      if (cur === c) {
        acc++;
      }
    }
    return acc
  }, 0)
};
// @lc code=end

