/*
 * @lc app=leetcode.cn id=784 lang=javascript
 *
 * [784] 字母大小写全排列
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function (S) {
  const res = [];
  let temp = '';
  for (let i = 0; i < S.length; i++) {
    if (!res.length) {
      if (!isLetter(S[i])) {
        temp += S[i];
      } else {
        if (!temp.length) {
          res.push(S[i], isUpper(S[i]) ? S[i].toLowerCase() : S[i].toUpperCase());
        } else {
          res.push(temp);
          i--;
        }
      }
    } else {
      let resLen = res.length;
      let letter = S[i];
      let cur = ''
      if (isLetter(letter)) {
        for (let j = 0; j < resLen; j++) {
          cur = res.shift();
          res.push(cur + letter, cur + (isUpper(S[i]) ? S[i].toLowerCase() : S[i].toUpperCase()));
        }
      } else {
        for (let j = 0; j < resLen; j++) {
          cur = res.shift();
          res.push(cur + letter);
        }
      }
    }
  }
  if (temp === S) {
    res.push(temp);
  }
  return res;
};
function isLetter(c) {
  return !/\d/.test(c);
}
function isUpper(c) {
  return /[A-Z]/.test(c);
}
// @lc code=end

