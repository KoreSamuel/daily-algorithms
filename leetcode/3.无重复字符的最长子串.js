/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let max = 0;
  let count = 0;
  let temp = '';
  for (let c = 0; c < s.length; c++) {
    if (!temp.includes(s[c])) {
      count += 1;
      temp += s[c];
    } else {
      if (count > max) {
        max = count;
      }
      let idx = temp.indexOf(s[c]);
      temp = temp.slice(idx + 1) + s[c];
      count = temp.length;
    }
  }
  return count > max ? count : max;
};
// console.log(lengthOfLongestSubstring(' '));
