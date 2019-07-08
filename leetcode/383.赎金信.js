/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  let ar = [...ransomNote];
  let am = [...magazine];
  let idx = -1;
  for (let i = 0; i < ar.length; i++) {
    idx = am.indexOf(ar[i]);
    if (idx === -1) {
      return false;
    } else {
      am.splice(idx, 1);
    }
  }
  return true;
};
