/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文字符串 Ⅱ
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  let [left, right] = [0, s.length - 1];
  let temp = '';
  while (left <= right) {
    if (s[left] === s[right]) {
      left++;
      right--;
    } else {
      if (s[left + 1] === s[right]) {
        temp = s.slice(left + 1, right + 1);
        if (temp === [...temp].reverse().join('')) {
          return true;
        }
      }
      if (s[left] === s[right - 1]) {
        temp = s.slice(left, right);
        if (temp === [...temp].reverse().join('')) {
          return true;
        }
      }
      return false;
    }
  }
  return true;
};
