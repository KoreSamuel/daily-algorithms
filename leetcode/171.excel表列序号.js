/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel表列序号
 */
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  // 'A'.charCodeAt() === 65
  return [...s].reduceRight((acc, cur, index) => {
    acc += (cur.charCodeAt() - 64) * 26 ** (s.length - 1 - index);
    return acc;
  }, 0);
};
