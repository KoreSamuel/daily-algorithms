/*
 * @lc app=leetcode.cn id=451 lang=javascript
 *
 * [451] 根据字符出现频率排序
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  const hash = {};
  for (const c of s) {
    if (hash[c]) {
      hash[c]++;
    } else {
      hash[c] = 1;
    }
  }
  return Object.keys(hash).sort((b, a) => hash[a] - hash[b]).reduce((acc, cur) => {
    acc += cur.repeat(hash[cur]);
    return acc;
  }, '')
};
// @lc code=end

