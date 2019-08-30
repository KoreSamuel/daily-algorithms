/*
 * @lc app=leetcode.cn id=844 lang=javascript
 *
 * [844] 比较含退格的字符串
 */
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
  let s = [...S]
    .reduce((acc, cur) => {
      cur === '#' ? acc.pop() : acc.push(cur);
      return acc;
    }, [])
    .join('');
  let t = [...T]
    .reduce((acc, cur) => {
      cur === '#' ? acc.pop() : acc.push(cur);
      return acc;
    }, [])
    .join('');
  return s === t;
};
// backspaceCompare('ab#c', 'ad#c');
