/*
 * @lc app=leetcode.cn id=728 lang=javascript
 *
 * [728] 自除数
 */
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */

var helper = function(num) {
  let temp = num;
  while (num) {
    let tail = num % 10;
    if (temp % tail === 0) {
      num = (num / 10) | 0;
    } else {
      return false;
    }
  }
  return true;
};
var selfDividingNumbers = function(left, right) {
  let res = [];
  for (let i = left; i <= right; i++) {
    if (helper(i)) {
      res.push(i);
    }
  }
  return res;
};
