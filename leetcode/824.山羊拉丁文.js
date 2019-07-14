/*
 * @lc app=leetcode.cn id=824 lang=javascript
 *
 * [824] 山羊拉丁文
 */
/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function(S) {
  return S.split(' ')
    .reduce((acc, cur, index) => {
      if (cur.match(/^[aeiou]/i)) {
        cur = cur + 'ma';
      } else {
        cur = cur.slice(1) + cur.slice(0, 1) + 'ma';
      }
      acc.push(cur.padEnd(cur.length + index + 1, 'a'));
      return acc;
    }, [])
    .join(' ');
};
