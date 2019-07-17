/*
 * @lc app=leetcode.cn id=884 lang=javascript
 *
 * [884] 两句话中的不常见单词
 */
/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
  let arr = [...A.split(' '), ...B.split(' ')];
  let hash = {};
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (hash[arr[i]]) {
      hash[arr[i]] += 1;
    } else {
      hash[arr[i]] = 1;
    }
  }
  for (let i in hash) {
    if (hash[i] === 1) {
      res.push(i);
    }
  }
  return res;
};
