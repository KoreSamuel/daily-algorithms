/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  let l = 1;
  let r = num;
  while (l <= r) {
    let m = ((l + r) / 2) | 0;
    let sum = m * m;
    if (sum === num) {
      return true;
    }
    if (sum < num) {
      l = m + 1;
    }
    if (sum > num) {
      r = m - 1;
    }
  }
  return false;
};
