/*
 * @lc app=leetcode.cn id=165 lang=javascript
 *
 * [165] 比较版本号
 */
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  let a1 = version1.split('.');
  let a2 = version2.split('.');
  while (a1.length || a2.length) {
    let c1 = +(a1.shift() || 0);
    let c2 = +(a2.shift() || 0);
    if (c1 === c2) {
      continue;
    } else if (c1 < c2) {
      return -1;
    } else {
      return 1;
    }
  }
  return 0;
};
// console.log(compareVersion('7.5.2.4.0.0', '7.5.002.4'));
