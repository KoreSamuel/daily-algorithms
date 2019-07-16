/*
 * @lc app=leetcode.cn id=917 lang=javascript
 *
 * [917] 仅仅反转字母
 */
/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
  let s = [...S];
  let l = 0;
  let r = S.length - 1;
  let t = '';
  while (l < r) {
    if (isLetter(s[l]) && isLetter(s[r])) {
      t = s[l];
      s[l] = s[r];
      s[r] = t;
      l++;
      r--;
    } else if (!isLetter(s[l]) && isLetter(s[r])) {
      l++;
    } else if (isLetter(s[l]) && !isLetter(s[r])) {
      r--;
    } else {
      l++;
      r--;
    }
  }
  return s.join('');
};

const isLetter = c => {
  return /[a-zA-Z]/.test(c);
};
