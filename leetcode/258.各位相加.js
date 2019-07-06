/*
 * @lc app=leetcode.cn id=258 lang=javascript
 *
 * [258] 各位相加
 */
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  return num === 0 ? 0 : num % 9 === 0 ? 9 : num % 9;
};
