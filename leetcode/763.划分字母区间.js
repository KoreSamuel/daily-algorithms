/*
 * @lc app=leetcode.cn id=763 lang=javascript
 *
 * [763] 划分字母区间
 */

// @lc code=start
/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function (S) {
  const res = [];
  const map = new Map();
  let start = 0,
    end = 0;

  for (let i = 0; i < S.length; i++) {
    map.set(S[i], i);
  }

  for (let j = 0; j < S.length; j++) {
    end = Math.max(end, map.get(S[j]));
    if (j === end) {
      res.push(end - start + 1);
      start = j + 1;
    }
  }
  return res;
};
// @lc code=end
