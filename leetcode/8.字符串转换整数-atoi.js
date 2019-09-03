/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  const MAX = 2 ** 31 - 1;
  const MIN = -(2 ** 31);
  let res = '';
  let result = 0;
  str = str.trim();
  if (/\+|\-|[0-9]/.test(str[0])) {
    for (let i = 1; i < str.length; i++) {
      if (/[0-9]/.test(str[i])) {
        res += str[i];
      } else {
        break;
      }
    }
  } else {
    return 0;
  }
  if (str[0] === '+') {
    result = +res;
  } else if (str[0] === '-') {
    result = -res;
  } else {
    result = +(str[0] + res);
  }
  if (result > MAX) {
    return MAX;
  } else if (result < MIN) {
    return MIN;
  } else {
    return result;
  }
};
// console.log(myAtoi('words and 987'));
