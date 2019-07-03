/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  res = x;
  while (res * res > x) {
    res = ((res + x / res) / 2) | 0;
  }
  return res;
};
