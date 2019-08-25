/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  const m = new Map();
  while (n !== 1) {
    let temp = 0;
    let res = 0;
    while (n) {
      temp = n % 10;
      res += temp ** 2;
      n = (n / 10) | 0;
    }
    n = res;
    if (m.has(res)) {
      return false;
    }
    m.set(res);
  }
  return true;
};
// isHappy(19);
