/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 报数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  if (n === 1) return '1';
  let str = countAndSay(n - 1);
  let temp = str[0];
  let count = 0;
  let res = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === temp) {
      count++;
    } else {
      res += '' + count + temp;
      temp = str[i];
      count = 1;
    }
    if (i === str.length - 1) {
      res += '' + count + temp;
    }
  }
  return res;
};
// @lc code=end

