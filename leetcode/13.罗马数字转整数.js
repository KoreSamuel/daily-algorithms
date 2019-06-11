/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const ROMANOBJ = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    const rom1 = ROMANOBJ[s[i]];
    const rom2 = ROMANOBJ[s[i + 1]];
    if (s[i + 1] !== '' && rom1 < rom2) {
      sum += rom2 - rom1;
      i++;
    } else {
      sum += rom1;
    }
  }
  return sum;
};
