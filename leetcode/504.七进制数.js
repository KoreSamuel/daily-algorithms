/*
 * @lc app=leetcode.cn id=504 lang=javascript
 *
 * [504] 七进制数
 */
/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
  let r = '';
  let n = num > 0 ? num : -num;
  if (n < 7) {
    return `${num}`;
  }
  while (n >= 7) {
    let c = n % 7;
    r = c + r;
    n = (n / 7) | 0;
  }
  r = n + r;
  return num > 0 ? r : `-${r}`;
};
