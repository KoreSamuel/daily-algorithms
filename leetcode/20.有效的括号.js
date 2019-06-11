/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack = [];

  let STR = "({[]})";
  for (let i = 0; i < s.length; i++) {
    let item = s[i];
    let index = -1;
    if ((index = STR.indexOf(item)) < 3) {
      stack.push(item);
    } else {
      let left = stack.pop();
      if (!left) {
        return false;
      }
      if (left != STR[5 - index]) {
        return false;
      }
    }
  }
  return !stack.length;
};
