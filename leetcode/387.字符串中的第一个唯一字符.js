/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const hash = {};
  [...s].forEach(c => {
    if (hash[c]) {
      hash[c] += 1;
    } else {
      hash[c] = 1;
    }
  });

  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]] === 1) {
      return i;
    }
  }
  return -1;
};
