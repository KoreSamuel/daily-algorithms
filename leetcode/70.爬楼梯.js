/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n === 1 || n === 2) return n;
  let a = 1,
    b = 2,
    c = 0;
  while (n-- > 2) {
    c = a + b;
    a = b;
    b = c;
  }
  return c;
};
