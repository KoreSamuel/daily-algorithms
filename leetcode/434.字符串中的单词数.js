/*
 * @lc app=leetcode.cn id=434 lang=javascript
 *
 * [434] 字符串中的单词数
 */
/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
  return s.length ? s.split(' ').filter(i => i !== '').length : 0;
};
