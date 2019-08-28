/*
 * @lc app=leetcode.cn id=557 lang=javascript
 *
 * [557] 反转字符串中的单词 III
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  return s
    .split(' ')
    .map(w => {
      return [...w].reverse().join('');
    })
    .join(' ');
};
