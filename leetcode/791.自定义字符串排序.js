/*
 * @lc app=leetcode.cn id=791 lang=javascript
 *
 * [791] 自定义字符串排序
 */

// @lc code=start
/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
var customSortString = function (S, T) {
  let res = [];
  for (let s = 0; s < S.length; s++) {
    let c = S[s];
    for (let t = 0; t < T.length; t++) {
      if (T[t] === c) {
        res.push(c);
      } else if (!S.includes(T[t]) && T[t] != 0) {
        res.unshift(T[t]);
        T = T.replace(T[t], 0);
      }
    }
  }
  return res.join('');
};
// console.log(customSortString('hucw', 'utzoampdgkalexslxoqfkdjoczajxtuhqyxvlfatmptqdsochtdzgypsfkgqwbgqbcamdqnqztaqhqanirikahtmalzqjjxtqfnh'))
// "hucw"
// "utzoampdgkalexslxoqfkdjoczajxtuhqyxvlfatmptqdsochtdzgypsfkgqwbgqbcamdqnqztaqhqanirikahtmalzqjjxtqfnh"
// @lc code=end

