/*
 * @lc app=leetcode.cn id=633 lang=javascript
 *
 * [633] 平方数之和
 */
/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
  let max = Math.sqrt(c) | 0;
  for (let i = 0; i <= max; i++) {
    if (Number.isInteger(Math.sqrt(c - i * i))) {
      return true;
    }
  }
  return false;
};
