/*
 * @lc app=leetcode.cn id=830 lang=javascript
 *
 * [830] 较大分组的位置
 */
/**
 * @param {string} S
 * @return {number[][]}
 */
var largeGroupPositions = function(S) {
  let start = 0;
  let end = 0;
  let res = [];
  let cur = S[0];
  for (let i = 1; i < S.length; i++) {
    if (cur === S[i]) {
      end++;
    } else {
      if (end - start >= 2) {
        res.push([start, end]);
      }
      start = i;
      cur = S[i];
      end = i;
    }
  }
  if (end - start >= 2) {
    res.push([start, end]);
  }
  return res;
};
