/*
 * @lc app=leetcode.cn id=709 lang=javascript
 *
 * [709] 转换成小写字母
 */
/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  const t = 'a'.charCodeAt() - 'A'.charCodeAt();
  return [...str].reduce((acc, cur) => {
    acc +=
      cur >= 'A' && cur <= 'Z'
        ? String.fromCharCode(cur.charCodeAt() + t)
        : cur;
    return acc;
  }, '');
};
