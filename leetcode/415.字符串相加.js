/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let res = '',
    c = 0,
    a = [...num1],
    b = [...num2];
  while (a.length || b.length || c) {
    c += (a.pop() | 0) + (b.pop() | 0);
    res = (c % 10) + res;
    c = c > 9;
  }
  return res.replace(/^0+/, '') || '0';
};
