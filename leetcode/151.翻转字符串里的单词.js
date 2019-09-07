/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 翻转字符串里的单词
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  s = s.trim();
  let sa = s.split(' ').filter(a => a.length);
  return [...sa].map(() => sa.pop(), sa).join(' ');
};
// console.log(reverseWords('   the     sky is blue   '));
