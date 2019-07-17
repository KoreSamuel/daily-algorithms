/*
 * @lc app=leetcode.cn id=819 lang=javascript
 *
 * [819] 最常见的单词
 */
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
  let arrp = paragraph
    .toLowerCase()
    .replace(/\W+/g, ' ')
    .trim()
    .split(' ');
  const hash = {};
  for (let i = 0; i < arrp.length; i++) {
    if (!banned.includes(arrp[i])) {
      if (hash[arrp[i]]) {
        hash[arrp[i]] += 1;
      } else {
        hash[arrp[i]] = 1;
      }
    }
  }
  let max = 1;
  let res = '';
  for (let [k, v] of Object.entries(hash)) {
    if (v >= max) {
      max = v;
      res = k;
    }
  }
  return res;
};
