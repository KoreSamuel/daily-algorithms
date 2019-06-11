/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let originX = x;
  let reverseX = 0;
  while (x > 0) {
    reverseX = (x % 10) + reverseX * 10;
    x = (x / 10) | 0;
  }
  return reverseX === originX;
};
