/*
 * @lc app=leetcode.cn id=326 lang=javascript
 *
 * [326] 3的幂
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  if (n === 1) return true;

  let base = 3;
  while (base <= n) {
    if (base === n) {
      return true;
    }
    base *= 3;
  }
  return false;
};
