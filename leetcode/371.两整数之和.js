/*
 * @lc app=leetcode.cn id=371 lang=javascript
 *
 * [371] 两整数之和
 */
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
  let n1 = a ^ b;
  while (b !== 0) {
    n1 = a ^ b;
    b = (a & b) << 1;
    a = n1;
  }
  return n1;
};
