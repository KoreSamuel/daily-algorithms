/*
 * @lc app=leetcode.cn id=374 lang=javascript
 *
 * [374] 猜数字大小
 */
/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let l = 1, r = n;
  while (l <= n) {
    let m = (l + r) / 2 | 0;
    if (guess(m) === 0) {
      return m;
    } else if (guess(m) === -1) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }
  return -1;
};