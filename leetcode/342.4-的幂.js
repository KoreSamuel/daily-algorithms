/*
 * @lc app=leetcode.cn id=342 lang=javascript
 *
 * [342] 4的幂
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
  if (num === 1) return true;

  let base = 4;
  while (base <= num) {
    if (base === num) {
      return true;
    }
    base *= 4;
  }
  return false;
};
