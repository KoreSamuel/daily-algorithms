/*
 * @lc app=leetcode.cn id=796 lang=javascript
 *
 * [796] 旋转字符串
 */
/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function(A, B) {
  if (A.length !== B.length) return false;
  if (A === B) return true;
  let a = [...A];
  let len = A.length;
  while (len--) {
    a.push(a.shift());
    if (a.join('') === B) {
      return true;
    }
  }
  return false;
};
