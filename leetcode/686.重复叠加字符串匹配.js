/*
 * @lc app=leetcode.cn id=686 lang=javascript
 *
 * [686] 重复叠加字符串匹配
 */
/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function(A, B) {
  let repeat = Math.ceil(B.length / A.length);
  let repeatA = A.repeat(repeat);

  return repeatA.includes(B)
    ? repeat
    : (repeatA + A).includes(B)
    ? repeat + 1
    : -1;
};
