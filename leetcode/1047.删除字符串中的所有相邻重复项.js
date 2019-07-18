/*
 * @lc app=leetcode.cn id=1047 lang=javascript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */
/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
  let s = [...S];
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) {
      s.splice(i, 2);
      i++;
    }
  }
  return s.join('') === S ? S : removeDuplicates(s.join(''));
};
