/*
 * @lc app=leetcode.cn id=482 lang=javascript
 *
 * [482] 密钥格式化
 */
/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function(S, K) {
  let s = [...S.replace(/-/g, '').toLocaleUpperCase()];
  let len = s.length - K;
  while (len > 0) {
    s.splice(len, 0, '-');
    len -= K;
  }
  return s.join('');
};
