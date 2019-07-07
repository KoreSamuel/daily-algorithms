/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 */
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  let sa = str.trim().split(' ');
  if (sa.length !== pattern.length) return false;
  let hashPattern = {};
  let hashStr = {};

  for (let i = 0; i < sa.length; i++) {
    if (!hashPattern.hasOwnProperty(pattern[i])) {
      hashPattern[pattern[i]] = sa[i];
    }
    if (!hashStr.hasOwnProperty(sa[i])) {
      hashStr[sa[i]] = pattern[i];
    }
    if (!(hashPattern[pattern[i]] === sa[i] && hashStr[sa[i]] === pattern[i])) {
      return false;
    }
  }
  return true;
};
