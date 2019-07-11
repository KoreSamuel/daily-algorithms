/*
 * @lc app=leetcode.cn id=500 lang=javascript
 *
 * [500] 键盘行
 */
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
  return words.filter(w =>
    w.toLocaleLowerCase().match(/^[qwertyuiop]*$|^[asdfghjkl]*$|^[zxcvbnm]*$/)
  );
};
