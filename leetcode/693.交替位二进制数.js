/*
 * @lc app=leetcode.cn id=693 lang=javascript
 *
 * [693] 交替位二进制数
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
  let pre = n % 2;
  let cur;
  n = (n / 2) | 0;
  while (n > 1) {
    cur = n % 2;
    if (cur === pre) {
      return false;
    } else {
      pre = cur;
      n = (n / 2) | 0;
    }
  }
  cur = n;
  return pre !== cur;
};
// console.log(hasAlternatingBits(2));
