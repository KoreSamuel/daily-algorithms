/*
 * @lc app=leetcode.cn id=1009 lang=javascript
 *
 * [1009] 十进制整数的反码
 */
/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function(N) {
  if (N === 0) return 1;
  let base = 1;
  while (N) {
    if (base - 1 < N) {
      base = base * 2;
    } else {
      return N ^ (base - 1);
    }
  }
};
// 我是怎么想的，哈哈哈
